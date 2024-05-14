import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ coordinates }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Create the map instance
      mapRef.current = L.map('map-container', {
        scrollWheelZoom: false // Disable scroll wheel zoom
      }).setView(coordinates, 20);

      // Add the TileLayer (map tiles)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Add a marker to the map at the specified coordinates
      L.marker(coordinates).addTo(mapRef.current);
    } else {
      // Update map view if coordinates change
      mapRef.current.setView(coordinates, 20);
    }
  }, [coordinates]);

  return <div id="map-container" className="w-full h-96" style={{ minHeight: '400px' }} />;
}

export default Map;