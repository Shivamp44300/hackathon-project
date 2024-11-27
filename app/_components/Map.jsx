"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet (ensure it's only loaded client-side)
const L = dynamic(() => import("leaflet"), { ssr: false });

const MapComponent = ({ currentLocation, dataEntries, onEntryClick }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && L && currentLocation) {
      // Initialize the map only if the currentLocation is provided (client-side)
      const mapInstance = L.map("map", {
        center: currentLocation,
        zoom: 13,
        zoomControl: false, // Optional: Hide zoom control for a cleaner look
      });

      // Add Tile Layer (use OpenStreetMap as an example)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      }).addTo(mapInstance);

      // Store map instance
      setMap(mapInstance);

      // Clean up map instance when the component is unmounted
      return () => {
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    }
  }, [currentLocation]);

  useEffect(() => {
    if (map) {
      // Clear existing markers
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add markers for data entries (you can adjust this as needed)
      dataEntries.forEach((entry) => {
        const { position, place } = entry;
        const marker = L.marker(position)
          .addTo(map)
          .bindPopup(`<b>${place}</b>`)
          .on("click", () => {
            // Handle marker click event (e.g., show details)
            onEntryClick(entry);
          });
      });
    }
  }, [map, dataEntries, onEntryClick]);

  return (
    <div id="map" style={{ width: "100%", height: "100%" }}>
      {/* This div is where Leaflet will render the map */}
    </div>
  );
};

export default MapComponent;
