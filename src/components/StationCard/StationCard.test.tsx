import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import StationCard from "."

function mockServiceStation() {
  return {
    address: "45 Station Road",
    city: "Manchester",
    zip: "M1 1AE",
    open_hours: [["05:30", "21:00"]] as [string, string][],
    accepts_cards: false,
    coordinates: {"lat": 55.318453, "long": 1.309597},
    distance: 3.0123456
  }
}

describe("Station Card", () => {
  test("should show address, city and zip of station", () => {
    const serviceStation = mockServiceStation()
    const { getByText } = render(<StationCard station={serviceStation} />)

    getByText(serviceStation.address);
    getByText(`${serviceStation.city} ${serviceStation.zip}`);
  })

  test("should show distance fixed to 2 decimal", () => {
    const serviceStation = mockServiceStation()
    const { getByText } = render(<StationCard station={serviceStation} />)

    getByText(`${serviceStation.distance.toFixed(2)} mi`);
  })
})
