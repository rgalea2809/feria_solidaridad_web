import { FullProject } from '@/src/types'
import { PrimaryButton } from '@/styles/Buttons'
import { Paragraph, SectionTitle, SubTitle, Title } from '@/styles/Typography'
import Link from 'next/link'
import React from 'react'
import { ProjectWrapper } from './Project.styles'

const Project = ({ project }: { project: FullProject }) => {
    const { imageUrl, title, formUrl, description, modality, place, hours, vacants, activities, requirements, schedules, contacts, institution } = project
    return (
        <ProjectWrapper>
            <img src={imageUrl} alt='project image' className='project-img' />
            <div className='section header'>
                <Title>{(title).toUpperCase()}</Title>
                <SubTitle>{institution.name}</SubTitle>
            </div>
            <Paragraph>{description}</Paragraph>
            {activities.length > 0 && <div className='section'>
                <SectionTitle>Actividades a desarrollar</SectionTitle>
                <ul>
                    {activities.map((activity, index) => <li key={index}><Paragraph>{activity}</Paragraph></li>)}
                </ul>
            </div>}
            {requirements.length > 0 && <div className='section'>
                <SectionTitle>Perfil del estudiante</SectionTitle>
                <ul>
                    {requirements.map((requirement, index) => <li key={index}><Paragraph>{requirement}</Paragraph></li>)}
                </ul>
            </div>}
            {modality && <div className='inline-section'>
                <SectionTitle>Modalidad:</SectionTitle>
                <Paragraph>{modality}</Paragraph>
            </div>}
            {place && <div className='inline-section'>
                <SectionTitle>Lugar:</SectionTitle>
                <Paragraph>{place}</Paragraph>
            </div>}
            {hours && <div className='inline-section'>
                <SectionTitle>Cantidad de horas a obtener:</SectionTitle>
                <Paragraph>{hours}</Paragraph>
            </div>}
            {vacants && <div className='inline-section'>
                <SectionTitle>Plazas disponibles:</SectionTitle>
                <Paragraph>{vacants}</Paragraph>
            </div>}
            {schedules && schedules.length > 0 && <div className='inline-section'>
                <SectionTitle>Horario:</SectionTitle>
                <Paragraph>{schedules.join(", ")}</Paragraph>
            </div>}
            {formUrl && <div className='section'>
                <PrimaryButton as="a" href={formUrl} target="_blank" className='button'>
                    <img src={'/servicio-social/feria-solidaridad/images/google-forms.png'}
                        height={25}
                        width={25}
                        alt='google form icon' />
                    <span>Aplicar a Proyecto</span>
                </PrimaryButton>
            </div>}
        </ProjectWrapper>
    )
}

export default Project