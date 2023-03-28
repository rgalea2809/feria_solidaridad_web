import { Title } from '@/styles/Typography'
import React from 'react'
import { AppsBannerContainer } from './AppsBanner.styles'

const AppsBanner = () => {
    return (
        <AppsBannerContainer>
            <Title>DESCARGA NUESTRAS APLICACIONES MOVILES</Title>
            <div className='app'>
                <div className='app-name'>
                    <img src={'/servicio-social/feria-solidaridad/images/phone.png'} alt="phone icon" width={65} height={70} />
                    <h2>FeriaSolidaridadUCA</h2>
                </div>
                <div className='platforms'>
                    <img src={'/servicio-social/feria-solidaridad/images/huawei.png'} alt="huawei icon" width={45} height={45} />
                    <img src={'/servicio-social/feria-solidaridad/images/playstore.png'} alt="playstore icon" width={45} height={45} />
                    <img src={'/servicio-social/feria-solidaridad/images/app-store.png'} alt="appstore icon" width={45} height={45} />
                </div>
            </div>
        </AppsBannerContainer>
    )
}

export default AppsBanner