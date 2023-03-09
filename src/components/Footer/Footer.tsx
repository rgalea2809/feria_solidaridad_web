import React from 'react'
import { FooterContainer } from './Footer.styles'
import UCA from '../../../public/images/uca-logo.png'
import Facebook from '../../../public/images/facebook.png'
import Email from '../../../public/images/email.png'
import Web from '../../../public/images/web.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <FooterContainer>
            <div className='university'>
                <Image src={UCA} alt="logo" width={55} height={75} className='logo-uca' />
                <h1>Universidad Cenrtroamericana Jose Simeon Cañas</h1>
            </div>
            <div className='institution'>
                <h1>Centro de Servicio Social {new Date().getFullYear()}</h1>
            </div>
            <div className='social-media'>
                <Link href="https://es-es.facebook.com/cssuca/" passHref target="_blank">
                    <Image src={Facebook} alt="facebook" width={40} height={40} />
                    <p>Centro de Servicio Social</p>
                </Link>
                <Link href="mailto:centro.serviciosocial@uca.edu.sv" passHref target="_blank">
                    <Image src={Email} alt="email" width={40} height={40} />
                    <p>centro.serviciosocial@uca.edu.sv</p>
                </Link>
                <Link href="https://www.uca.edu.sv/servicio-social/opciones-de-servicio-social/" passHref target="_blank">
                    <Image src={Web} alt="website" width={40} height={40} />
                    <p>https://www.uca.edu.sv/servicio-social/opciones-de-servicio-social/</p>
                </Link>
            </div>
            <div className='institution-mobile'>
                <h1>Centro de Servicio Social {new Date().getFullYear()}</h1>
            </div>
        </FooterContainer>
    )
}

export default Footer