import { ServiceStation } from "../App";
import { distance as calculateDistance } from "./distanceService";
import bpServiceStations from "./mockData";

export type StationSearchRequest = {
  distance: number;
  available24Hours?: boolean;
  hasConvenienceStores?: boolean;
  prepareHotFood?: boolean;
  acceptsBPFuelCards?: boolean;
};

export type Coordinates = {
  lat: number;
  long: number;
};

const BASE_COORDINATES: Coordinates = { lat: 55.375999, long: 1.391128 };

export default function getAllStations(
  request: StationSearchRequest
): ServiceStation[] {
  let result = bpServiceStations()
    .map(calculateAndAddDistance)
    .filter((station) => {
      return station.distance <= request.distance
    });

  if (request.available24Hours) {
    result = result.filter(isStationAlwaysOpen);
  }

  if (request.hasConvenienceStores) {
    result = result.filter((station) => station.convenience_store);
  }

  if (request.prepareHotFood) {
    result = result.filter(
      (station) =>
        station.convenience_store && station.convenience_store.food_available
    );
  }

  if (request.acceptsBPFuelCards) {
    result = result.filter((station) => station.accepts_cards);
  }

  return result;
}

function calculateAndAddDistance(station: ServiceStation) {
  const distance = calculateDistance(station.coordinates, BASE_COORDINATES);
  return { ...station, distance };
}

function isStationAlwaysOpen(station: ServiceStation) {
  return (
    station.open_hours.length === 1 &&
    station.open_hours[0][0] === "00:00" &&
    station.open_hours[0][1] === "23:59"
  );
}
