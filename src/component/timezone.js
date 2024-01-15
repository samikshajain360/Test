import React from 'react';

const TimezoneSelector = ({ selectedTimezone, onTimezoneChange }) => {
  const timezones = ['UTC-0', 'UTC+2']; // Add more timezones as needed

  const handleTimezoneChange = (e) => {
    const newTimezone = e.target.value;
    onTimezoneChange(newTimezone);
  };

  return (
    <div>
      <label>Select Timezone:</label>
      <select value={selectedTimezone} onChange={handleTimezoneChange}>
        {timezones.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimezoneSelector;
