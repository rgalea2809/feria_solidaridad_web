import React, { useState } from 'react'

import FsLightbox from "fslightbox-react";
import Item from './Item/Item';
import { GalleryContainer } from './Gallery.styles';
import { Title } from '@/styles/Typography';

const images = [
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
    '/servicio-social/feria-solidaridad/images/feria-de-solidaridad.jpg',
]

const GalleryImages = () => {
    const [toggler, setToggler] = useState({
        toggler: false,
        sourceIndex: 0,
    });
    return (
        <GalleryContainer>
            <Title>GALERIA DE FOTOS</Title>
            <div className='images'>
                {images.map((item, index) => <Item src={item} index={index} setToogler={setToggler} key={index} toogler={toggler.toggler} />)}
            </div>
            <FsLightbox
                toggler={toggler.toggler}
                sourceIndex={toggler.sourceIndex}
                sources={images}
            />
        </GalleryContainer>
    )
}

export default GalleryImages