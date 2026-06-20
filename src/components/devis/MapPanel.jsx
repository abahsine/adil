import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import useRouteDistance from "../../hooks/useRouteDistance";

export default function MapPanel({ depart, arrive, onRouteComputed }) {
  const directions = useRouteDistance(depart, arrive, onRouteComputed);

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={{ lat: 46.6, lng: 2.4 }}
      zoom={6}
      mapTypeId="roadmap"
      options={{ disableDefaultUI: true, zoomControl: true }}
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
