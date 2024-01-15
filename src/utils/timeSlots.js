const generateTimeSlots = (currentDate, selectedTimezone) => {
  const timeSlots = [];
  const startDateTime = currentDate.clone().hour(8).minute(0).second(0).utcOffset(selectedTimezone);
  const endDateTime = currentDate.clone().hour(23).minute(30).second(0).utcOffset(selectedTimezone);

  let currentSlot = startDateTime.clone();

  while (currentSlot.isSameOrBefore(endDateTime)) {
    timeSlots.push({
      startTime: currentSlot.format('hh:mm A'), // Use 12-hour format with AM/PM
      isChecked: false,
    });

    currentSlot.add(30, 'minutes');
  }

  return timeSlots;
};

export const loadWeeklyData = (currentDate, selectedTimezone, setWeeklyData) => {
  const startDate = currentDate.clone().startOf('week');
  const endDate = currentDate.clone().endOf('week');
  const days = [];

  for (let date = startDate; date.isSameOrBefore(endDate); date.add(1, 'day')) {
    if (date.isoWeekday() >= 1 && date.isoWeekday() <= 5) {
      const timeSlots = generateTimeSlots(currentDate, selectedTimezone);

      days.push({
        dayName: date.format('dddd'),
        timeSlots,
      });
    }
  }

  setWeeklyData(days);
};
