import React from 'react'
import { FooterContainer } from './Footer.styles'
import Link from 'next/link'

const Footer = () => {
    return (
        <FooterContainer>
            <div className='university'>
                <img src={'/servicio-social/feria-solidaridad/images/uca-logo.png'} alt="logo" width={55} height={75} className='logo-uca' />
                <h1>Universidad Centroamericana José Simeón Cañas</h1>
            </div>
            <div className='institution'>
                <h1>Centro de Servicio Social {new Date().getFullYear()}</h1>
            </div>
            <div className='social-media'>
                <Link href="https://es-es.facebook.com/cssuca/" passHref target="_blank">
                    <img src={'/servicio-social/feria-solidaridad/images/facebook.png'} alt="facebook" width={40} height={40} />
                    <p>Centro de Servicio Social</p>
                </Link>
                <Link href="https://instagram.com/cssuca?igshid=YmMyMTA2M2Y=" passHref target="_blank">
                    <img src={'/servicio-social/feria-solidaridad/images/instagram.png'} alt="facebook" width={40} height={40} />
                    <p>@cssuca</p>
                </Link>
                <Link href="mailto:centro.serviciosocial@uca.edu.sv" passHref target="_blank">
                    <img src={'/servicio-social/feria-solidaridad/images/email.png'} alt="email" width={40} height={40} />
                    <p>centro.serviciosocial@uca.edu.sv</p>
                </Link>
                <Link href="https://www.uca.edu.sv/servicio-social/opciones-de-servicio-social/" passHref target="_blank">
                    <img src={'/servicio-social/feria-solidaridad/images/web.png'} alt="website" width={40} height={40} />
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