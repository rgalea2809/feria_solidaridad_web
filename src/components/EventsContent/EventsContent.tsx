import { Event as eventType} from '@/src/types'
import React from 'react'
import Event from './Event/Event'
import { EventosContentStyled } from './EventosContent.styles'


const EventsContent = ({ events }: { events: eventType[]}) => {
  return (
    <EventosContentStyled>
      {events.map((event) => <Event title={event.name} href={event.hyperlink} key={event.id} />)}
    </EventosContentStyled>
  )
}

export default EventsContent