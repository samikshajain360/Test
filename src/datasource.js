export const dataSource = [
    {
      id: 1,
      subject: "Meeting with John",
      startTime: new Date(2018, 7, 8, 10, 0),
      endTime: new Date(2018, 7, 8, 11, 0),
      resourceId: "A",
      color: "blue",
    },
    {
      id: 2,
      subject: "Lunch break",
      startTime: new Date(2018, 7, 8, 12, 0),
      endTime: new Date(2018, 7, 8, 13, 0),
      resourceId: "B",
      color: "green",
      isAllDay: true,
    },
    {
      id: 3,
      subject: "Project review",
      startTime: new Date(2018, 7, 8, 14, 0),
      endTime: new Date(2018, 7, 8, 15, 0),
      resourceId: "C",
      color: "red",
      recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,WE,FR;INTERVAL=1",
    },
  ];