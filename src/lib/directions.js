export function getRoute(origin, destination) {
  return new Promise((resolve, reject) => {
    if (!window.google || !window.google.maps) {
      reject(new Error("Google Maps API non chargée."));
      return;
    }

    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status !== "OK" || !result.routes?.[0]) {
          reject(new Error("Erreur Directions API : " + status));
          return;
        }
        const leg = result.routes[0].legs[0];
        resolve({
          distanceKm: leg.distance.value / 1000,
          durationMin: Math.round(leg.duration.value / 60),
          directionsResult: result,
        });
      }
    );
  });
}

export function renderRoute(directionsRenderer, directionsResult) {
  if (!directionsRenderer || !directionsResult) return;
  directionsRenderer.setDirections(directionsResult);
}
