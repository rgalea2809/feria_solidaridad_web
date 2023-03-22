import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Feria de la solidaridad</title>
      <meta name="description" content="Feria de la solidaridad UCA" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/servicio-social/feria-solidaridad/images/logo-feria.png" />
    </Head>
    <Component {...pageProps} />
  </>)
}
