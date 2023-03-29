import { Apps } from '@/src/types'
import { Title } from '@/styles/Typography'
import { getImageSize } from 'next/dist/server/image-optimizer'
import React from 'react'
import { AppsBannerContainer } from './AppsBanner.styles'

const huawei = '/servicio-social/feria-solidaridad/images/huawei.png'
const playstore = '/servicio-social/feria-solidaridad/images/playstore.png'
const appstore = '/servicio-social/feria-solidaridad/images/app-store.png'

const AppsBanner = ({ apps }: { apps: Apps[] }) => {

    const getIcon = (store: String) => {
        let image = ''
        switch (store) {
            case 'playstore':
                image = playstore;
                break;
            case 'appstore':
                image = appstore;
                break;
            case 'huawei':
                image = huawei;
                break;
            default:
                image = ''
        }
        return image;
    }
    return (
        <AppsBannerContainer>
            <Title>DESCARGA NUESTRAS APLICACIONES MOVILES</Title>

            {apps.map((app,index) => <div className='app' key={index} >
                <div className='app-name'>
                    <img src={'/servicio-social/feria-solidaridad/images/phone.png'} alt="phone icon" width={65} height={70} />
                    <h2>{app.name}</h2>
                </div>
                <div className='platforms'>
                    <a href={'https://play.google.com/store/apps/details?id=com.uca.css.feria_solidaridad_app'} target="_blank" rel="noreferrer"><img src={playstore} alt="app icon" width={45} height={45} /></a>
                </div>
            </div>)}
        </AppsBannerContainer>
    )
}

export default AppsBanner