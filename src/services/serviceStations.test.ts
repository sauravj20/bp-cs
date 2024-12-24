import { test, expect } from "vitest";
import getAllStations from "./serviceStations";
import { ServiceStation } from "../App";

test("should get list of all service stations", () => {
  const result = getAllStations({ distance: 100 });
  expect(result.length).toBe(14);
});

test("should get list of all service stations in the specified distance", () => {
  const result = getAllStations({ distance: 1 });
  expect(result.length).toBe(3);
});

test("should add distance field for all the fetched stations", () => {
  const result = getAllStations({ distance: 100 });

  expect(result.length).toBe(14);
  expect(result.every((station) => station.distance)).toBeTruthy();
});

test("should get list of all service stations open 24 hours", () => {
  const result = getAllStations({ distance: 100, available24Hours: true });

  expect(result.length).toBe(2);
  expect(result.every(available24Hours)).toBeTruthy();
});

test("should get list of all service stations with convenience stores", () => {
  const result = getAllStations({ distance: 100, hasConvenienceStores: true });

  expect(result.length).toBe(5);
  expect(result.every((station) => station.convenience_store)).toBeTruthy();
});

test("should get list of all service stations serving food", () => {
  const result = getAllStations({
    distance: 100,
    hasConvenienceStores: true,
    prepareHotFood: true,
  });

  expect(result.length).toBe(3);
  expect(
    result.every((station) => station.convenience_store?.food_available)
  ).toBeTruthy();
});

test("should get list of all service stations accepting fuel cards", () => {
  const result = getAllStations({ distance: 100, acceptsBPFuelCards: true });

  expect(result.length).toBe(9);
  expect(result.every((station) => station.accepts_cards)).toBeTruthy();
});

function available24Hours(station: ServiceStation) {
  const { open_hours } = station;
  return (
    open_hours?.length === 1 &&
    open_hours[0][0] === "00:00" &&
    open_hours[0][1] === "23:59"
  );
}
