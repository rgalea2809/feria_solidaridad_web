import { Project } from '@/src/types';
import { PrimaryButton } from '@/styles/Buttons';
import Link from 'next/link';
import React from 'react'
import { ProjectCardStyle } from './ProjectCard.styles';

const ProjectCard = ({ title, slug, imageUrl, hours, modality }: Project) => {
  return (
    <ProjectCardStyle>
      <img src={imageUrl} alt="project thumbnail" />
      <div className='info'>
        <h1 className='project-title'>{title}</h1>
        {modality && <p><b>Modalidad:</b> {modality}</p>}
        {hours && <p><b>Horas Requeridas:</b> {hours}</p>}

        <Link href={`/proyectos/${slug}`} passHref>
          <PrimaryButton>Ver mas</PrimaryButton>
        </Link>

      </div>
    </ProjectCardStyle>
  )
}

export default ProjectCard