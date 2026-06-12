import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const CheckboxList = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [weeklyData, setWeeklyData] = useState([]);

  // Function to load weekly data
  const loadWeeklyData = () => {
    const startDate = currentDate.clone().startOf('week');
    const endDate = currentDate.clone().endOf('week');
    const days = [];

    for (let date = startDate; date.isSameOrBefore(endDate); date.add(1, 'day')) {
      if (date.isoWeekday() >= 1 && date.isoWeekday() <= 5) {
        const timeSlots = generateTimeSlots();

        days.push({
          dayName: date.format('dddd'), // Get the weekday name
          timeSlots,
        });
      }
    }

    setWeeklyData(days);
  };

  // Function to generate time slots for a given day
  const generateTimeSlots = () => {
    const timeSlots = [];
    const startDateTime = currentDate.clone().hour(8).minute(0).second(0).utcOffset(selectedTimezone);
    const endDateTime = currentDate.clone().hour(23).minute(30).second(0).utcOffset(selectedTimezone);

    let currentSlot = startDateTime.clone();

    while (currentSlot.isSameOrBefore(endDateTime)) {
      timeSlots.push({
        startTime: currentSlot.format('HH:mm'),
        isChecked: false,
      });

      currentSlot.add(30, 'minutes');
    }

    return timeSlots;
  };

  // Function to handle timezone change
  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone);
  };

  // Function to handle date change when clicking Previous or Next buttons
  const handleDateChange = (amount) => {
    setCurrentDate(currentDate.clone().add(amount, 'weeks'));
  };

  // Load weekly data when component mounts or when currentDate or timezone changes
  useEffect(() => {
    loadWeeklyData();
  }, [currentDate, selectedTimezone]);

  return (
    <div>
      <div>
        <button onClick={() => handleDateChange(-1)}>Previous</button>
        {currentDate.format('YYYY-MM-DD')}
        <button onClick={() => handleDateChange(1)}>Next</button>
      </div>
      <div>
        Timezone:
        <select onChange={(e) => handleTimezoneChange(e.target.value)}>
          <option value="UTC">UTC</option>
          <option value="Other">EST</option>
        </select>
      </div>
      {/* Grid for weekdays and time slots */}
      <div className="grid-container">
        {weeklyData.map((day) => (
          <div key={day.dayName} className="grid-item">
            {day.dayName}
          </div>
        ))}
        {weeklyData.length > 0 &&
          weeklyData[0].timeSlots.map((timeSlot) => (
            <div key={timeSlot.startTime} className="grid-item">
              <label>
                <input
                  type="checkbox"
                  checked={timeSlot.isChecked}
                  onChange={() => {
                    // Handle checkbox state change if needed
                  }}
                />
                {timeSlot.startTime}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckboxList;
