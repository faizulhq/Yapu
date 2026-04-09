"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ImpactLocation } from "@/lib/api";

interface Props { locations: ImpactLocation[] }

export default function MapComponent({ locations }: Props) {
  const center: [number, number] = [-7.0, 107.8];

  const getRadius = (n: number) => n >= 200 ? 28 : n >= 100 ? 20 : n >= 50 ? 14 : 9;

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "2rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <CircleMarker
          key={loc.id}
          center={[loc.latitude, loc.longitude]}
          radius={getRadius(loc.beneficiaries_count)}
          pathOptions={{
            color: "#173901",
            fillColor: "#feb234",
            fillOpacity: 0.8,
            weight: 2,
          }}
        >
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
