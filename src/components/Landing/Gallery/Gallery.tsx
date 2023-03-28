import React, { useState } from 'react'

import FsLightbox from "fslightbox-react";
import Item from './Item/Item';
import { GalleryContainer } from './Gallery.styles';
import { Title } from '@/styles/Typography';
import { Image } from '@/src/types';


const GalleryImages = ({images}: {images: Image[]}) => {
    const [toggler, setToggler] = useState({
        toggler: false,
        sourceIndex: 0,
    });
    return (
        <GalleryContainer>
            <Title>GALERIA DE FOTOS</Title>
            <div className='images'>
                {images.map((item, index) => <Item src={item.url} index={index} setToogler={setToggler} key={index} toogler={toggler.toggler} />)}
            </div>
            <FsLightbox
                toggler={toggler.toggler}
                sourceIndex={toggler.sourceIndex}
                sources={images.map((item)=>item.url)}
            />
        </GalleryContainer>
    )
}

export default GalleryImages