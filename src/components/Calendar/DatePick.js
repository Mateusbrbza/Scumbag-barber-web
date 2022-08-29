import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-big-calendar';
import moment from "moment";

const myEvents = [{ 
    title: "evento especial", 
    start: new Date(),
    end: new Date(), 
}];

export default function DatePick() {
    const [newEvent, setNewEvent] = useState({ 
    title: "", 
    start: new Date(), 
    end: new Date() });
    const [allEvents, setAllEvents] = useState(myEvents);

    const Calendar = props => {

    const defaultView  = props.isMobileOpen 
    ? Calendar.Views.DAY 
    : Calendar.Views.WEEK;
    let timeSlot = 60 / props.slotSize;
    let today = moment();
    let minHour = today
    .set("hour", props.openHour)
    .set("minutes", 0)
    .toDate();
    let maxHour = today
    .set("hour", props.closeHour)
    .set("minutes", 0)
    .toDate();
    };

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
            <div>
                {/* <Calendar 
                selectable
                min={Calendar.minHour}
                max={Calendar.maxHour}
                timeslots={Calendar.timeSlot}
                defaultView={Calendar.defaultView}
                /> */}
            </div>
            </div>
            )
        }