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
      //Academic Calendar
      {
        id: 'UG Odd Sem Start', // Event's ID (required)
        name: "UG Odd Semester Class Start", // Event name (required)
        date: "July/01/2022", // Event date (required)
        type: "event", // Event type (required)
        color: "#0c027a",
        everyYear: false // Same event every year (optional)
      },
      {
        name: "MidSem of OddSem",
        date: ["September/12/2022", "September/17/2022"], // Date range
        description: "UG OddSem MidSemester Examination ", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#fc0505" // Event custom color (optional)
      },
      {
        name: "EndSem of OddSem",
        date: ["November/22/2022", "December/01/2022"], // Date range
        description: "UG OddSem EndSemester Examination ", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#fc0505" // Event custom color (optional)
      },

    {
      name: "Odd Sem Vacation Leave",
      date: ["December/01/2022", "December/10/2022"], // Date range
      description: "UG OddSem Break", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#11fa05" // Event custom color (optional)
    },
    {
      id: 'UG Odd Sem Start', // Event's ID (required)
      name: "UG Odd Semester Class Start", // Event name (required)
      date: "December/12/2022", // Event date (required)
      type: "event", // Event type (required)
      color: "#0c027a",
      everyYear: false // Same event every year (optional)
    },
    {
      name: "MidSem of EvenSem",
      date: ["February/06/2023", "February/11/2023"], // Date range
      description: "UG EvenSem MidSemester Examination ", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#fc0505" // Event custom color (optional)
    },
    {
      name: "EndSem of EvenSem",
      date: ["April/24/2023", "May/03/2023"], // Date range
      description: "UG EvenSem EndSemester Examination ", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#fc0505" // Event custom color (optional)
    },

  {
    name: "Even Sem Vacation Leave",
    date: ["May/04/2023", "July/08/2023"], // Date range
    description: "UG EvenSem Break", // Event description (optional)
    type: "event",
    everyYear: false ,
    color: "#11fa05" // Event custom color (optional)
  },
  //Academic Calendar for PG
  {
    id: 'PG Odd Sem Start', // Event's ID (required)
    name: "PG Odd Semester Class Start", // Event name (required)
    date: "July/11/2022", // Event date (required)
    type: "event", // Event type (required)
    color: "#0c027a",
    everyYear: false // Same event every year (optional)
  },
  {
    name: "PG MidSem of OddSem",
    date: ["September/05/2022", "September/10/2022"], // Date range
    description: "PG OddSem MidSemester Examination ", // Event description (optional)
    type: "event",
    everyYear: false ,
    color: "#fc0505" // Event custom color (optional)
  },
  {
    name: "PG EndSem of OddSem",
    date: ["November/14/2022", "November/30/2022"], // Date range
    description: "PG OddSem EndSemester Examination ", // Event description (optional)
    type: "event",
    everyYear: false ,
    color: "#fc0505" // Event custom color (optional)
  },

{
  name: "PG Odd Sem Vacation Leave",
  date: ["December/01/2022", "December/10/2022"], // Date range
  description: "PG OddSem Break", // Event description (optional)
  type: "event",
  everyYear: false ,
  color: "#11fa05" // Event custom color (optional)
},
{
  id: 'PG Odd Sem Start', // Event's ID (required)
  name: "PG Odd Semester Class Start", // Event name (required)
  date: "December/12/2022", // Event date (required)
  type: "event", // Event type (required)
  color: "#0c027a",
  everyYear: false // Same event every year (optional)
},
{
  name: "PG MidSem of EvenSem",
  date: ["February/06/2023", "February/11/2023"], // Date range
  description: "PG EvenSem MidSemester Examination ", // Event description (optional)
  type: "event",
  everyYear: false ,
  color: "#fc0505" // Event custom color (optional)
},
{
  name: "PG EndSem of EvenSem",
  date: ["April/24/2023", "May/04/2023"], // Date range
  description: "PG EvenSem EndSemester Examination ", // Event description (optional)
  type: "event",
  everyYear: false ,
  color: "#fc0505" // Event custom color (optional)
},

{
name: "PG Even Sem Vacation Leave",
date: ["May/06/2023", "July/08/2023"], // Date range
description: "UG EvenSem Break", // Event description (optional)
type: "event",
everyYear: false ,
color: "#11fa05" // Event custom color (optional)
},

  ]
  });
  