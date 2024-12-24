import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import StationList from ".";
import getAllStations from "../../services/serviceStations";

describe("Station List", () => {
  test("should show station cards for the passed data", () => {
    const serviceStations = getAllStations({ distance: 100 });

    const { getAllByTestId } = render(
      <StationList serviceStations={serviceStations} />
    );

    expect(getAllByTestId("station-card").length).toBe(14);
  });
});
