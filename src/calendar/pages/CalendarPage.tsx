/* eslint-disable @typescript-eslint/no-unused-vars */
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'

import { Navbar, CalendarEvent } from ".."
import { localizer, getMessagesEs } from '../../helpers'
import { useState } from 'react'

interface Event {
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgcolor: string;
  user: {
    _id: string;
    name: string;
  };
}

const evento: Event[] = [{
  title: 'Cumpleaños del jefe',
  notes: 'Comprar el regalo',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgcolor: '#fafafa',
  user: {
    _id: '123',
    name: 'Angel'
  }
}];


export const CalendarPage = () => {

  const [lastView, setLastView] = useState<string>(localStorage.getItem('lastview') || 'week')

  const eventStyleGetter = () => {
    const style = {
      backgroundColor: '#337CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onViewChanged = (event: string) => {
    localStorage.setItem('lastview', event.toString());
    setLastView(event);
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={evento}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        defaultView={lastView as any}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onView={onViewChanged}
      />

    </>
  )
}