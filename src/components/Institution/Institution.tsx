import { FullInstitution } from '@/src/types'
import React from 'react'
import { InstitutionWrapper } from './Institution.styles'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import { Paragraph, SectionTitle, Title } from '@/styles/Typography';
import { IframeStyled } from '../Landing/Message/Message.styles';
import ProjectCard from '../Projects/ProjectCard/ProjectCard';
import Contact from './Contact/Contact';

const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    autoplay:true,
    slidesToScroll: 1
};


const Institution = ({ institution }: { institution: FullInstitution }) => {
    const { aboutUs, contacts, name, images, mission, objective, projects, videoUrl, vission } = institution
    
  return (
      <InstitutionWrapper>
          <div className='slider'>
              <Slider {...settings} autoplay={true} >
                  {images?.map((image, index) => <img src={image.url} key={index} alt={ image.alt || 'institution image'} />)}
              </Slider>
          </div>
          <div className='section'>
              <Title>{(name).toUpperCase()}</Title>
          </div>
          {aboutUs && <div className='section'>
              <SectionTitle>¿Quienes somos?</SectionTitle>
              <Paragraph>{aboutUs}</Paragraph>
          </div>}
          {objective && <div className='section'>
              <SectionTitle>Objetivo</SectionTitle>
              <Paragraph>{objective}</Paragraph>
          </div>}
          {mission && <div className='section'>
              <SectionTitle>Mision</SectionTitle>
              <Paragraph>{mission}</Paragraph>
          </div>}
          {vission && <div className='section'>
              <SectionTitle>Vision</SectionTitle>
              <Paragraph>{vission}</Paragraph>
          </div>}
          { videoUrl && <div className='video'><IframeStyled>
              <iframe
                  src={videoUrl}
                  title={name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen />
          </IframeStyled></div>}
          {projects && projects?.length > 0 && <div className='wrapper'>
              <Title>PROYECTOS</Title>
              <div className='projects'>
                  {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
              </div>
          </div>}
          {contacts.length > 0 && <div className='wrapper'>
              <Title>CONTACTOS</Title>
              <div className='contacts-wrapper'>
                  {contacts.map((contact, index) => <Contact {...contact} key={index} />)}
              </div>
            </div>}
      </InstitutionWrapper>
  )
}

export default Institution