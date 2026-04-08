"use client";

import dynamic from "next/dynamic";
import { ImpactLocation } from "@/lib/api";

// Dynamic import to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function MapVisualization({ locations }: { locations: ImpactLocation[] }) {
  return <MapComponent locations={locations} />;
}
