import { useEffect, useRef, useState } from "react";
import { getRoute } from "../lib/directions";

export default function useRouteDistance(depart, arrive, onRouteComputed) {
  const [directionsResult, setDirectionsResult] = useState(null);
  const cancelledRef = useRef(false);
  const onRouteComputedRef = useRef(onRouteComputed);

  useEffect(() => {
    onRouteComputedRef.current = onRouteComputed;
  }, [onRouteComputed]);

  useEffect(() => {
    cancelledRef.current = false;
    if (!depart || !arrive || depart === arrive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- clearing the result to stay in sync with cleared address props
      setDirectionsResult(null);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const route = await getRoute(depart, arrive);
        if (cancelledRef.current) return;
        setDirectionsResult(route.directionsResult);
        onRouteComputedRef.current?.({ distanceKm: route.distanceKm, durationMin: route.durationMin });
      } catch {
        if (!cancelledRef.current) {
          setDirectionsResult(null);
          onRouteComputedRef.current?.({ error: "Impossible de calculer l'itinéraire pour ces adresses." });
        }
      }
    }, 800);

    return () => {
      cancelledRef.current = true;
      clearTimeout(timer);
    };
  }, [depart, arrive]);

  return directionsResult;
}
