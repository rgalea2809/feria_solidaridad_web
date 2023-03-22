import { Contact as ContactType } from '@/src/types'
import Link from 'next/link';
import React from 'react'
import { ContactWrapper } from './Contact.styles';

const Contact = ({ data, type }: ContactType) => {

    const email = '/servicio-social/feria-solidaridad/images/contacts/email-icon.png';
    const facebook = '/servicio-social/feria-solidaridad/images/contacts/fb.png';
    const instagram = '/servicio-social/feria-solidaridad/images/contacts/ig.png'
    const twitter = '/servicio-social/feria-solidaridad/images/contacts/tw.png'
    const phone = '/servicio-social/feria-solidaridad/images/contacts/phone.png'
    const website = '/servicio-social/feria-solidaridad/images/contacts/website.png'
    
    const isEmail = type === 'email';
    const isPhone = type === 'phone';
    const isWebsite = type === 'website';
    const isNormal = !isEmail && !isPhone && !isWebsite;
    let image = ''
    
    switch (type) {
        case 'facebook':
            image = facebook;
            break;
        case 'instagram':
            image = instagram;
            break;
        case 'website':
            image = website;
            break;
        case 'twitter':
            image = twitter;
            break;
        case 'phone':
            image = phone;
            break;
        case 'email':
            image = email;
            break;
        default:
            image = ''
    }
    
  return (
      <ContactWrapper>
          {
              isEmail && <Link href={`mailto:${data}`} passHref className='contact'>
                  <img src={image} />
                  <p>{data}</p>
              </Link>
          }
          {
              isPhone && <Link href={`tel:${data}`} passHref className='contact'>
                  <img src={image} />
                  <p>{data}</p>
              </Link>
          }{
              isWebsite && <Link href={`${data}`} passHref className='contact' target="_blank">
                  <img src={image} />
                  <p>{data}</p>
              </Link>
          }{
              isNormal && <div className='contact'>
                  <img src={image} />
                  <p>{data}</p>
              </div>
          }

      </ContactWrapper>
  )
}

export default Contact