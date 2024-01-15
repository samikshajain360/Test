import React, { useState } from 'react';
import WeeklySchedule from './WeeklySchedule';
import TimezoneSelector from './timezone';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC-0');

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleTimezoneChange = (newTimezone) => {
    setSelectedTimezone(newTimezone);
  };

  return (
    <div>
      <h1>Weekly Calendar</h1>
      <TimezoneSelector
        selectedTimezone={selectedTimezone}
        onTimezoneChange={handleTimezoneChange}
      />
      <WeeklySchedule currentDate={currentDate} onDateChange={handleDateChange} />
    </div>
  );
};

export default Calendar;
