"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ImpactLocation } from "@/lib/api";

interface Props {
  locations: ImpactLocation[];
}

export default function MapComponent({ locations }: Props) {
  // Center of Java island
  const center: [number, number] = [-7.2, 109.5];

  const getRadius = (count: number) => {
    if (count >= 200) return 30;
    if (count >= 100) return 22;
    if (count >= 50) return 16;
    return 10;
  };

  return (
    <MapContainer
      center={center}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
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
            color: "#2D5016",
            fillColor: "#E8A020",
            fillOpacity: 0.75,
            weight: 2,
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong className="text-[#2D5016] block text-base">{loc.name}</strong>
              <span className="text-gray-500">{loc.province}</span>
              <br />
              <span className="font-semibold text-gray-800">
                {loc.beneficiaries_count}+ penerima manfaat
              </span>
              {loc.program_title && (
                <>
                  <br />
                  <span className="text-xs text-gray-400">Program: {loc.program_title}</span>
                </>
              )}
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
