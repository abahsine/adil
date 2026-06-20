import { useCallback, useEffect, useRef } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import useRouteDistance from "../../hooks/useRouteDistance";

// Objets stables (hors composant) : évite que la carte se recentre sur la
// vue par défaut à chaque re-rendu (ex: à chaque frappe dans les champs d'adresse).
const DEFAULT_CENTER = { lat: 46.6, lng: 2.4 };
const DEFAULT_ZOOM = 6;
const MAP_OPTIONS = { disableDefaultUI: true, zoomControl: true };
const DIRECTIONS_OPTIONS = { polylineOptions: { strokeColor: "#C9A84C", strokeWeight: 4 }, suppressMarkers: false };

export default function MapPanel({ depart, arrive, onRouteComputed }) {
  const directions = useRouteDistance(depart, arrive, onRouteComputed);
  const mapRef = useRef(null);

  const handleLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Recentre/zoome automatiquement la carte sur le trajet dès qu'il est calculé,
  // pour qu'il soit visible sans avoir à déplacer la carte manuellement.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const bounds = directions?.routes?.[0]?.bounds;
    if (bounds) {
      map.fitBounds(bounds, 48);
    } else {
      map.setCenter(DEFAULT_CENTER);
      map.setZoom(DEFAULT_ZOOM);
    }
  }, [directions]);

  return (
    <GoogleMap
      onLoad={handleLoad}
      mapContainerClassName="w-full h-full"
      center={DEFAULT_CENTER}
      zoom={DEFAULT_ZOOM}
      mapTypeId="roadmap"
      options={MAP_OPTIONS}
    >
      {directions && <DirectionsRenderer directions={directions} options={DIRECTIONS_OPTIONS} />}
    </GoogleMap>
  );
}
