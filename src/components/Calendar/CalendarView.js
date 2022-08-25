import React, { useState } from 'react';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar';
import DatePicker from "react-datepicker";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import '../../index.css';
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import 'react-calendar/dist/Calendar.css';
 import './CalendarView.css';

// alterar para manter apenas o display semanal
// criar outro arquivo para a visualizacao menor do calendario


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const myEvents = [
  { start: new Date(), end: new Date(), title: "special event" }
];

function CalendarView() {
  const [date, setDate] = useState(new Date());
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(myEvents);

  function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

  return (
    <div className='app'>
      <div className='calendar-container'>
      </div>
      <div>
                <input 
                type="text" 
                placeholder="Add Title" 
                style={{ width: "20%", marginRight: "10px" }} 
                value={newEvent.title} onChange={(e) => 
                setNewEvent({ ...newEvent, title: e.target.value })} 
                />

                <DatePicker placeholderText="Start Date" 
                style={{ marginRight: "10px" }} 
                selected={newEvent.start} 
                onChange={(start) => setNewEvent({ ...newEvent, start })} 
                />

                <DatePicker placeholderText="End Date" 
                selected={newEvent.end} 
                onChange={(end) => setNewEvent({ ...newEvent, end })} 
                />

                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
          <Calendar
          defaultView={Views.WEEK}
          onChange={setDate}
          value={date}
          selectRange={true}
          localizer={localizer} 
          events={myEvents} 
          startAccessor="start" 
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />  
    </div>
  );

}

export default CalendarView;
