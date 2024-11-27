"use client";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is loaded

const MapComponent = ({ currentLocation, dataEntries, onEntryClick }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && currentLocation) {
      // Initialize map
      const mapInstance = L.map("map", {
        center: currentLocation,
        zoom: 13,
        zoomControl: false,
      });

      // Add Tile Layer (OpenStreetMap tiles)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      }).addTo(mapInstance);

      // Store map instance in state
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
    if (map && dataEntries) {
      // Clear existing markers before adding new ones
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Define a custom icon for the markers
      const customIcon = L.icon({
        iconUrl: "/location-pin.png", // Replace with your custom pin image URL
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (relative to its size)
        popupAnchor: [0, -32], // Popup position relative to the marker
      });

      // Add markers for each entry
      dataEntries.forEach((entry) => {
        const { position, place, reason } = entry;

        if (Array.isArray(position) && position.length === 2) {
          const marker = L.marker(position, { icon: customIcon }).addTo(map);

          // Bind Popup
          marker.bindPopup(`<p>${reason}<br/><b>${place}</b></p>`);

          // Bind Tooltip (permanent)
          marker.bindTooltip(`<p>${reason}<br/><b>${place}</b></p>`, {
            permanent: true,
            direction: "top",
          });

          // Marker click event to trigger action
          marker.on("click", () => {
            onEntryClick(entry); // Handle marker click event
          });
        }
      });
    }
  }, [map, dataEntries, onEntryClick]);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "700px", // Ensure the map has a height for proper rendering
      }}
    >
      {/* The map will render here */}
    </div>
  );
};

export default MapComponent;
