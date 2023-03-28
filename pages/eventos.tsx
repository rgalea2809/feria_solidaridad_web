import EventsContent from '@/src/components/EventsContent/EventsContent'
import Layout from '@/src/components/Layout/Layout'
import { eventsService } from '@/src/services/events'
import { Event } from '@/src/types'
import { GetStaticProps } from 'next'
import React from 'react'


const eventos = ({events}: {events:Event[]}) => {
  return (
    <Layout>
      <EventsContent events={events} />
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async () => {

  try {
    const events = await eventsService.getEvents();
    return {
      props: { events: events.data },
      revalidate: 120,
    };
  } catch {
    return {
      props: {},
      revalidate: 120,
      redirect: {
        destination: "/",
      },
    }
  }
}


export default eventos