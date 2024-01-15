import React, { useState, useEffect } from 'react';
import CheckboxList from './Checkbox';
import jsonData from './JsonFile'; // Import the JSON data

const WeeklySchedule = ({ onDateChange }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [localJsonData, setLocalJsonData] = useState(null);

  useEffect(() => {
    setLocalJsonData(jsonData);
  }, [currentDate]);

  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleDateClick = (clickedDate) => {
    setCurrentDate(clickedDate);
    onDateChange(clickedDate);
    // No need to fetch data, use the locally imported JSON data
  };

  return (
    <div>
      {/* Display the calendar grid and handle date clicks */}
      <p>Clicked Date: {currentDate && formatDate(currentDate)}</p>
      <button onClick={() => handleDateClick(/* calculate previous date */)}>Previous</button>
      <button onClick={() => handleDateClick(/* calculate next date */)}>Next</button>

      {/* Display fetched JSON data */}
      {localJsonData && (
        <div>
          <h2>JSON Data for {currentDate && formatDate(currentDate)}</h2>
          <ul>
            {localJsonData.map((event) => (
              <li key={event.Id}>
                {event.Name} - {event.Time}
              </li>
            ))}
          </ul>
        </div>
      )}

      <CheckboxList />
    </div>
  );
};

export default WeeklySchedule;
