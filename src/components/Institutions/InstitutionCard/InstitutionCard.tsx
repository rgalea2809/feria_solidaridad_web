import { Institution } from '@/src/types'
import { PrimaryButton } from '@/styles/Buttons'
import { Title } from '@/styles/Typography'
import Link from 'next/link'
import React from 'react'
import { InstitutionCardWrapper } from './InstitutionCard.styles'

const InstitutionCard = ({slug, aboutUs, logoUrl, name}:Institution) => {
  return (
      <InstitutionCardWrapper>
          <div className='header'>
              <img src={logoUrl} alt="institution logo" />
              <h1>{name}</h1>
          </div>
          <p className='description'>{aboutUs}</p>
          <Link href={`instituciones/${slug}`} passHref>
              <PrimaryButton>Ver mas</PrimaryButton>
          </Link>
          
    </InstitutionCardWrapper>
  )
}

export default InstitutionCard