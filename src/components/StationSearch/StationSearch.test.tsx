import {describe, expect, test, vi} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import StationSearch from ".";

describe("Station Search", () => {
  test("should search stations on selecting distance", () => {
    const onSearchMock = vi.fn();
    const {getByTestId} = render(<StationSearch onSearch={onSearchMock}/>);

    fireEvent.change(getByTestId('distance-dropdown'), {target: {value: 0.5}})

    expect(onSearchMock).toHaveBeenCalledWith({
      distance: 0.5,
      available24Hours: false,
      hasConvenienceStores: false,
      prepareHotFood: false,
      acceptsBPFuelCards: false
    });
  })

  test("should not search stations if distance is not selected and any filter is checked", () => {
    const onSearchMock = vi.fn();
    const {getByLabelText} = render(<StationSearch onSearch={onSearchMock}/>);

    fireEvent.click(getByLabelText("Open 24 hours"))

    expect(onSearchMock).not.toHaveBeenCalled();
  })

  test("should search stations if distance is selected and any filter is checked", () => {
    const onSearchMock = vi.fn();
    const {getByLabelText, getByTestId} = render(<StationSearch onSearch={onSearchMock}/>);

    fireEvent.change(getByTestId('distance-dropdown'), {target: {value: 0.5}})
    fireEvent.click(getByLabelText("Open 24 hours"))

    expect(onSearchMock).toHaveBeenNthCalledWith(2, {
      distance: 0.5,
      available24Hours: true,
      hasConvenienceStores: false,
      prepareHotFood: false,
      acceptsBPFuelCards: false
    });
  })
})
