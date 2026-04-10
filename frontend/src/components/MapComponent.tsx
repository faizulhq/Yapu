"use client";

import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ImpactLocation } from "@/lib/api";

interface Props { locations: ImpactLocation[] }

export default function MapComponent({ locations }: Props) {
  const center: [number, number] = [-7.0, 107.8];
  const getRadius = (n: number) => n >= 1000 ? 32 : n >= 200 ? 26 : n >= 100 ? 22 : 16;

  const formatK = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
    return n.toString();
  };

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "2rem" }}
    >
      <style>{`
        .yapu-tiles {
          filter: sepia(30%) hue-rotate(60deg) saturate(250%) brightness(95%) contrast(100%);
        }
        .circle-text-label {
          background-color: transparent;
          border: none;
          box-shadow: none;
          color: #173901;
          font-weight: 500;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        .circle-text-label::before {
          display: none !important;
        }
      `}</style>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        className="yapu-tiles"
      />
      {locations.map((loc) => (
        <CircleMarker
          key={loc.id}
          center={[loc.latitude, loc.longitude]}
          radius={getRadius(loc.beneficiaries_count)}
          pathOptions={{
            color: "#173901", // yapu primary green
            fillColor: "#feb234", // yapu secondary gold
            fillOpacity: 0.9,
            weight: 2,
          }}
        >
          <Tooltip direction="center" permanent className="circle-text-label" opacity={1}>
            {formatK(loc.beneficiaries_count)}
          </Tooltip>
          <Popup>
            <div className="text-sm min-w-[180px]">
              <strong className="text-[#173901] block text-base mb-1">{loc.name}</strong>
              <span className="text-gray-500 text-xs">{loc.province}</span>
              <br />
              <span className="font-bold text-gray-800 mt-1 block">{loc.beneficiaries_count}+ penerima manfaat</span>
              {loc.program_title && (
                <span className="text-xs text-gray-400 block mt-1">Program: {loc.program_title}</span>
              )}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
