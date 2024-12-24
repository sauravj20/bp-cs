import { expect, test } from "vitest";
import { distance } from "./distanceService";

test("should calculate distance between two coordinates", () => {
  const coordinates1 = {"lat": 55.361421, "long": 1.382112}
  const coordinates2 = {"lat": 55.340153, "long": 1.391845}
  const coordinates3 = {"lat": 55.392834, "long": 1.352197}
  const coordinates4 = {"lat": 55.385227, "long": 1.396914}
  expect(distance(coordinates1, coordinates2)).toBe(1.51849656161922);
  expect(distance(coordinates3, coordinates4)).toBe(1.8320526468986145);
  expect(distance(coordinates1, coordinates3)).toBe(2.467925709968977);
  expect(distance(coordinates2, coordinates4)).toBe(3.120860570672893);
  expect(distance(coordinates1, coordinates4)).toBe(1.744585786577045);
  expect(distance(coordinates2, coordinates3)).toBe(3.959129631544279);
})