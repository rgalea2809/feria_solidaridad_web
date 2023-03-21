import { FullProject } from '@/src/types'
import { Paragraph, SectionTitle, SubTitle, Title } from '@/styles/Typography'
import Link from 'next/link'
import React from 'react'
import { ProjectWrapper } from './Project.styles'

const Project = ({ project }: { project: FullProject }) => {
    const {  imageUrl, title, description, modality, place, hours, vacants, activities, requirements, schedules, contacts, institution } = project
    return (
        <ProjectWrapper>
            <img src={imageUrl} alt='project image' />
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
            {contacts.length > 0 && <div className='inline-section'>
                <SectionTitle>Contacto:</SectionTitle>
                <Link href={`mailto:${contacts[0].data}`} passHref target="_blank"><Paragraph>{contacts[0].data}</Paragraph></Link>
            </div>}
        </ProjectWrapper>
    )
}

export default Project