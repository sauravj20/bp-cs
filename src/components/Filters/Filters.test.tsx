import {fireEvent, render} from "@testing-library/react";
import {describe, expect, test, vi} from "vitest";
import Filters from ".";
import {SearchFilter} from "../StationSearch";

function defaultFilters(): SearchFilter {
  return {
    available24Hours: false,
    hasConvenienceStores: false,
    prepareHotFood: false,
    acceptsBPFuelCards: false,
  };
}

const OPEN_24_HOURS_LABEL = "Open 24 hours";
const HAS_CONVENIENCE_STORE_LABEL = "Has Convenience Store";
const SERVES_HOT_FOOD_LABEL = "Serves Hot Food";
const ACCEPTS_BP_FUEL_CARDS_LABEL = "Accepts BP fuel cards";
describe("Service Stations Filters", () => {

  test("should show checkboxes for open 24 hours, has convenience store, serves hot food, accepts bp fuel card", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    getByLabelText(OPEN_24_HOURS_LABEL)
    getByLabelText(HAS_CONVENIENCE_STORE_LABEL)
    getByLabelText(SERVES_HOT_FOOD_LABEL)
    getByLabelText(ACCEPTS_BP_FUEL_CARDS_LABEL)
  });

  test("should call onUpdate method with available24Hours as true when the respective checkbox is checked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(OPEN_24_HOURS_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), available24Hours: true});
  });

  test("should call onUpdate method with hasConvenienceStores as true when the respective checkbox is checked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(HAS_CONVENIENCE_STORE_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), hasConvenienceStores: true});
  });

  test("should call onUpdate method with prepareHotFood as true when the respective checkbox is checked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(SERVES_HOT_FOOD_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), prepareHotFood: true});
  });

  test("should call onUpdate method with acceptsBPFuelCards as true when the respective checkbox is checked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(ACCEPTS_BP_FUEL_CARDS_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), acceptsBPFuelCards: true});
  });

  test("should call onUpdate method with available24Hours as false when the respective checkbox is checked and unchecked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(OPEN_24_HOURS_LABEL))
    fireEvent.click(getByLabelText(OPEN_24_HOURS_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), available24Hours: true});
    expect(onUpdateMock).toHaveBeenNthCalledWith(2, {...defaultFilters()});
  });

  test("should call onUpdate method with hasConvenienceStores as false when the respective checkbox is checked and unchecked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(HAS_CONVENIENCE_STORE_LABEL))
    fireEvent.click(getByLabelText(HAS_CONVENIENCE_STORE_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), hasConvenienceStores: true});
    expect(onUpdateMock).toHaveBeenNthCalledWith(2, {...defaultFilters()});
  });

  test("should call onUpdate method with prepareHotFood as false when the respective checkbox is checked and unchecked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(SERVES_HOT_FOOD_LABEL))
    fireEvent.click(getByLabelText(SERVES_HOT_FOOD_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), prepareHotFood: true});
    expect(onUpdateMock).toHaveBeenNthCalledWith(2, {...defaultFilters()});
  });

  test("should call onUpdate method with acceptsBPFuelCards as false when the respective checkbox is checked and unchecked", () => {
    const onUpdateMock = vi.fn();
    const {getByLabelText} = render(<Filters filterValues={defaultFilters()} onUpdate={onUpdateMock}/>);

    fireEvent.click(getByLabelText(ACCEPTS_BP_FUEL_CARDS_LABEL))
    fireEvent.click(getByLabelText(ACCEPTS_BP_FUEL_CARDS_LABEL))

    expect(onUpdateMock).toHaveBeenNthCalledWith(1, {...defaultFilters(), acceptsBPFuelCards: true});
    expect(onUpdateMock).toHaveBeenNthCalledWith(2, {...defaultFilters()});
  });
});
