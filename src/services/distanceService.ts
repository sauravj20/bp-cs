import { Coordinates } from "./serviceStations";

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number) {

  const R = 3959; // Radius of the Earth in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  // haversine formula
  const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in miles
}

// Helper function to convert degrees to radians
function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}

export function distance(coordinate1: Coordinates, coordinate2: Coordinates) {
  return haversineDistance(coordinate1.lat, coordinate1.long, coordinate2.lat, coordinate2.long)
}