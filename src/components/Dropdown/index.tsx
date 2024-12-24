import React from 'react';
import "./Dropdown.css"

type DropdownProps = { options: string[], onSelect: (updatedValue: string) => void }

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  return (
    <div className="dropdown-wrapper">
      <label htmlFor="distance-dropdown">Radius (Miles)</label>
      <select
        onChange={handleChange}
        data-testid="distance-dropdown"
        id="distance-dropdown"
        defaultValue={""}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        <option value="" disabled>Select A Value</option>
        {options.map((option, index) => (
          <option key={index} data-testid="select-option" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
