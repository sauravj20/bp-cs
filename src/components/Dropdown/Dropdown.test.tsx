import {describe, test, vi, expect} from "vitest";
import {fireEvent, render} from "@testing-library/react";
import Dropdown from "./index.tsx";

describe("Distance Dropdown", () => {
  test("should select option from dropdown", () => {
    const onSelectMock = vi.fn();
    const {getByTestId, getAllByTestId} = render(<Dropdown options={['1', '2', '3']} onSelect={onSelectMock}/>);

    fireEvent.change(getByTestId('distance-dropdown'), { target: { value: 2 } })

    const options = getAllByTestId('select-option') as HTMLOptionElement[];
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    expect(onSelectMock).toHaveBeenCalledWith("2")
  })
});
