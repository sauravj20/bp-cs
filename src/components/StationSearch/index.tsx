import { useState } from "react";
import Dropdown from "../Dropdown";
import { StationSearchRequest } from "../../services/serviceStations";
import Filters from "../Filters";

export type SearchFilter = {
  available24Hours: boolean;
  hasConvenienceStores: boolean;
  prepareHotFood: boolean;
  acceptsBPFuelCards: boolean;
};

function defaultFilters(): SearchFilter {
  return {
    available24Hours: false,
    hasConvenienceStores: false,
    prepareHotFood: false,
    acceptsBPFuelCards: false,
  };
}

export default function StationSearch({
  onSearch,
}: {
  onSearch: (request: StationSearchRequest) => void;
}) {
  const [distance, setDistance] = useState<number | undefined>();
  const [filters, setFilters] = useState<SearchFilter>(defaultFilters());
  const handleDropdownChange = (value: string) => {
    const updatedDistance = parseFloat(value);
    setDistance(updatedDistance);
    onSearch({ distance: updatedDistance, ...filters });
  };

  const handleFilterChange = (filters: SearchFilter) => {
    setFilters(filters);
    if (distance) {
      onSearch({ distance, ...filters });
    }
  };

  return (
    <div>
      <Dropdown options={["0.5", "1", "5"]} onSelect={handleDropdownChange} />
      <Filters filterValues={filters} onUpdate={handleFilterChange}></Filters>
    </div>
  );
}
