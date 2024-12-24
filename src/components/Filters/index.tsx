import {SearchFilter} from "../StationSearch";
import "./Filters.css"

export default function Filters({
                                  filterValues,
                                  onUpdate,
                                }: {
  filterValues: SearchFilter;
  onUpdate: (filters: SearchFilter) => void;
}) {
  const updateFilter = (filterField: keyof SearchFilter) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      return onUpdate({...filterValues, [filterField]: e.target.checked});
    };
  };

  return (
    <div className="filters">
      <Checkbox
        label="Open 24 hours"
        identifier="open_24_hours"
        onChange={updateFilter("available24Hours")}
      />
      <Checkbox
        label="Has Convenience Store"
        identifier="convenience_store"
        onChange={updateFilter("hasConvenienceStores")}
      />
      <Checkbox
        label="Serves Hot Food"
        identifier="hot_food"
        onChange={updateFilter("prepareHotFood")}
      />
      <Checkbox
        label="Accepts BP fuel cards"
        identifier="accepts_cards"
        onChange={updateFilter("acceptsBPFuelCards")}
      />
    </div>
  );
}

function Checkbox({label, identifier, onChange}: {
  label: string;
  identifier: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return <div className="checkbox-wrapper">
    <label htmlFor={identifier}>
      {label}
    </label>
    <input
      type="checkbox"
      name={identifier}
      id={identifier}
      onChange={onChange}
    />
  </div>
}
