import {expect, test} from "vitest";
import {act, fireEvent, render} from "@testing-library/react";
import App from "./App.tsx";

test("should show station cards on selecting distance", () => {
  const {getAllByTestId, getByTestId} = render(<App />);

  act(() => fireEvent.change(getByTestId('distance-dropdown'), {target: {value: 5}}))

  expect(getAllByTestId("station-card").length).toBe(14);
})
