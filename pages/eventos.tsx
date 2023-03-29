import EventsContent from '@/src/components/EventsContent/EventsContent'
import Layout from '@/src/components/Layout/Layout'
import { eventsService } from '@/src/services/events'
import { Event } from '@/src/types'
import { theme } from '@/styles/theme'
import { useRouter } from 'next/router'
import Notiflix from 'notiflix'
import React, { useEffect, useState } from 'react'


const Eventos = () => {
  const [eventsData, setEventsData] = useState<Event[]>()
  const router = useRouter();

  useEffect(() => {
    Notiflix.Loading.init({
      className: 'notiflix-loading',
      zindex: 4000,
      backgroundColor: 'rgba(0,0,0,0.8)',
      rtl: false,
      fontFamily: 'Quicksand',
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      customSvgCode: null,
      svgSize: '80px',
      svgColor: theme.colors.gray,
      messageID: 'NotiflixLoadingMessage',
      messageFontSize: '15px',
      messageMaxLength: 34,
      messageColor: '#dcdcdc',
    });
  }, []);

  useEffect(() => {
    Notiflix.Loading.dots()
    const getData = async () => {
      try {
        const events = await eventsService.getEvents();
        setEventsData(events.data)
      } catch (e) {
        router.push('/')
      }
    };
    getData();
    Notiflix.Loading.remove();
  }, [])
  return (
    <Layout>
      {eventsData ? <EventsContent events={eventsData} /> : <div />}
    </Layout>
  )
}

export default Eventos