import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import { LandingContainer } from './Landing.styles'
import Footer from '../Footer/Footer'
import Message from './Message/Message'
import GalleryImages from './Gallery/Gallery'
import AppsBanner from './AppsBanner/AppsBanner'
import { HomePage, Image } from '@/src/types'

interface ILanding {
    images: Image[];
    homePage: HomePage;
}

const Landing = ({images, homePage}: ILanding ) => {
    const [visible, setVisible] = useState(false);

    const listenScrollEvent = () => {
        window.scrollY > 100 ? setVisible(true) : setVisible(false)
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <LandingContainer show={visible}>
            <div className='navbar'>
                <NavBar logo={ homePage.logo_home_url} />
            </div>
            <div className='landing-image'>
                <div className='image' />
                <div className='landing-content'>
                    <img src={'/servicio-social/feria-solidaridad/images/uca-logo.png'} alt="logo" width={153} height={220} className='logo-uca' />
                    <div className='header'>
                        <img src={homePage.logo_home_url} alt="logo" width={160} height={160} className='logo-feria' />
                        <h1>Feria de la solidaridad</h1>
                    </div>
                </div>
            </div>
            <div className='content'>
                {homePage.video_home_url && <Message message={homePage.message} author={homePage.message_author} video={homePage.video_home_url} />}
                <GalleryImages images={images}  />
                {homePage.haveApps && <AppsBanner  />}
            </div>
            <Footer />

        </LandingContainer>
    )
}

export default Landing