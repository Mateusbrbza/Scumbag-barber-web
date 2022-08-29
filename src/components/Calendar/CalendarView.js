import React, { useState } from 'react';
import {Calendar, dateFnsLocalizer, Views} from 'react-big-calendar';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
//import moment from 'moment';
import '../../index.css';
import DatePick from './DatePick';
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './CalendarView.css';

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

const buttonMessages = {
  month: "Mês",
  week: "Semana",
  day: "Dia",
  today: "Hoje",
  previous: "Anterior",
  next: "Próximo",
};

const myEvents = [{ 
  start: new Date(), 
  end: new Date(), 
  title: "evento especial" }
];

function CalendarView() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <div className='calendar-container'>
      </div>
          <DatePick />
          <Calendar
          selectable
          onChange={setDate}
          value={date}
          selectRange={true}
          localizer={localizer} 
          events={myEvents} 
          startAccessor="start" 
          endAccessor="end"
          messages={buttonMessages}
          views={[
            Views.MONTH,
            Views.WEEK,
            Views.DAY,
          ]}
          style={{ 
            height: 500, 
            margin: "50px" 
          }}
        />  
    </div>
  );
}

export default CalendarView;