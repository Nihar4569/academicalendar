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
    //   Academic Calander collage wise for UG
    {
        id: 'odd sem start', // Event's ID (required)
        name: "UG Odd Sem Start", // Event name (required)
        date: "July/11/2022", // Event date (required)
        type: "event", // Event type (required)
        color: "#66391d",
        everyYear: false // Same event every year (optional)
      },
      {
        id: 'Even sem start', // Event's ID (required)
        name: "UG Even Sem Start", // Event name (required)
        date: "December/19/2022", // Event date (required)
        type: "event", // Event type (required)
        color: "#66391d",
        everyYear: false // Same event every year (optional)
      },
      {
        name: "EndSem Exam of odd sem",
        
        date: ["November/28/2022", "December/07/2022"], // Date range
        description: "UG End Semester Examination of Odd Sem", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#eb4034" // Event custom color (optional)
      },
      {
        name: "MidSem Exam of odd sem",
        
        date: ["September/05/2022", "September/10/2022"], // Date range
        description: "UG Mid Semester Examination of Odd Sem", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#eb4034" // Event custom color (optional)
      },
      {
        name: "MidSem Exam of Even sem",
        
        date: ["February/o6/2023", "February/12/2023"], // Date range
        description: "UG Mid Semester Examination of even Sem", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#eb4034" // Event custom color (optional)
      },
      {
        name: "EndSem Exam of Even sem",
        
        date: ["April/26/2023", "May/06/2023"], // Date range
        description: "UG End Semester Examination of even Sem", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#eb4034" // Event custom color (optional)
      },
    {
      name: "Vacation Leave odd sem",
      
      date: ["December/08/2022", "December/18/2022"], // Date range
      description: "UG Odd Semester Break", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#63d867" // Event custom color (optional)
    },
    {
        name: "Vacation Leave even sem",
        date: ["May/08/2023", "July/8/2023"], // Date range
        description: "UG Even Semester Break", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#63d867" // Event custom color (optional)
        
      },
    //Academic Calander for PG
    {
      id: 'PG odd sem start', // Event's ID (required)
      name: "PG Odd Sem Start", // Event name (required)
      date: "July/11/2022", // Event date (required)
      type: "event", // Event type (required)
      color: "#66391d",
      everyYear: false // Same event every year (optional)
    },
    {
      id: 'PG Even sem start', // Event's ID (required)
      name: "PG Even Sem Start", // Event name (required)
      date: "December/12/2022", // Event date (required)
      type: "event", // Event type (required)
      color: "#66391d",
      everyYear: false // Same event every year (optional)
    },
    {
      name: "PG EndSem Exam of odd sem",
      
      date: ["November/21/2022", "December/03/2022"], // Date range
      description: "UG End Semester Examination of Odd Sem", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#eb4034" // Event custom color (optional)
    },
    {
      name: "PG MidSem Exam of odd sem",
      
      date: ["September/05/2022", "September/10/2022"], // Date range
      description: "PG Mid Semester Examination of Odd Sem", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#eb4034" // Event custom color (optional)
    },
    {
      name: "PG EndSem Exam of Even sem",
      
      date: ["February/20/2023", "February/25/2023"], // Date range
      description: "PG End Semester Examination of even Sem", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#eb4034" // Event custom color (optional)
    },
    {
      name: "PG EndSem Exam of Even sem",
      
      date: ["may/01/2023", "May/10/2023"], // Date range
      description: "PG End Semester Examination of even Sem", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#eb4034" // Event custom color (optional)
    },
    {
      name: "PG Vacation Leave odd sem",
      
      date: ["December/04/2022", "December/11/2022"], // Date range
      description: "PG Odd Semester Break", // Event description (optional)
      type: "event",
      everyYear: false ,
      color: "#63d867" // Event custom color (optional)
    },
    {
        name: "Vacation Leave even sem",
        date: ["May/10/2023", "July/08/2023"], // Date range
        description: "PG Even Semester Break", // Event description (optional)
        type: "event",
        everyYear: false ,
        color: "#63d867" // Event custom color (optional)
        
      },


    
  ]
  });
  