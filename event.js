$('#calendar').evoCalendar({
  theme: 'Midnight Blue',
  calendarEvents: [
    {
      id: 'event1', // Event's ID (required)
      name: "New Year", // Event name (required)
      date: "January/1/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event2', // Event's ID (required)
      name: "Republic Day", // Event name (required)
      date: "January/26/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event3', // Event's ID (required)
      name: "Independence Day", // Event name (required)
      date: "August/15/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event4', // Event's ID (required)
      name: "Labour's Day", // Event name (required)
      date: "May/1/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event5', // Event's ID (required)
      name: "Eid-al-Fitr", // Event name (required)
      date: "April/21/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event6', // Event's ID (required)
      name: "Gandhi Jayanti", // Event name (required)
      date: "October/2/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
    {
      id: 'event7', // Event's ID (required)
      name: "Christmas Day", // Event name (required)
      date: "December/25/1947", // Event date (required)
      type: "holiday", // Event type (required)
      everyYear: true // Same event every year (optional)
    },
  {
    name: "Vacation Leave",
    badge: "02/13 - 02/15", // Event badge (optional)
    date: ["February/13/2022", "February/15/2022"], // Date range
    description: "Vacation leave for 3 days.", // Event description (optional)
    type: "event",
    color: "#63d867" // Event custom color (optional)
  }
]
});
