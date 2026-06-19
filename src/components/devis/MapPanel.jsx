import { useEffect, useRef, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { getRoute } from "../../lib/directions";

const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#F5F5F0" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0A0A0A" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a2a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0A0A0A" }] },
];

export default function MapPanel({ depart, arrive, onRouteComputed }) {
  const [directions, setDirections] = useState(null);
  const cancelledRef = useRef(false);
  const onRouteComputedRef = useRef(onRouteComputed);

  useEffect(() => {
    onRouteComputedRef.current = onRouteComputed;
  }, [onRouteComputed]);

  useEffect(() => {
    cancelledRef.current = false;
    if (!depart || !arrive || depart === arrive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- clearing the rendered route to stay in sync with cleared address props
      setDirections(null);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const route = await getRoute(depart, arrive);
        if (cancelledRef.current) return;
        setDirections(route.directionsResult);
        onRouteComputedRef.current?.({ distanceKm: route.distanceKm, durationMin: route.durationMin });
      } catch {
        if (!cancelledRef.current) {
          setDirections(null);
          onRouteComputedRef.current?.({ error: "Impossible de calculer l'itinéraire pour ces adresses." });
        }
      }
    }, 800);

    return () => {
      cancelledRef.current = true;
      clearTimeout(timer);
    };
  }, [depart, arrive]);

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={{ lat: 46.6, lng: 2.4 }}
      zoom={6}
      options={{ styles: mapStyles, disableDefaultUI: true, zoomControl: true }}
    >
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{ polylineOptions: { strokeColor: "#C9A84C", strokeWeight: 4 }, suppressMarkers: false }}
        />
      )}
    </GoogleMap>
  );
}
