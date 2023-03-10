import React from 'react'
import Event from './Event/Event'
import { EventosContentStyled } from './EventosContent.styles'

const mockEvents = [
  { title: 'Entrega de diplomas Entrega de diplomas Entrega de diplomas', href: 'https://google.com' },
  { title: 'Entrega de diplomas', href: 'https://google.com' },
  { title: 'Entrega de diplomas', href: 'https://google.com' },
  { title: 'Entrega de diplomas', href: 'https://google.com' },
  { title: 'Entrega de diplomas', href: 'https://google.com' }
]

const EventsContent = () => {
  return (
    <EventosContentStyled>
      {mockEvents.map((event) => <Event title={event.title} href={event.href} key={event.title} />)}
    </EventosContentStyled>
  )
}

export default EventsContent