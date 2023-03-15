import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import Hamburguer from './HamburgerMenu/Hamburguer'

import { NavbarContainer } from './NavBar.styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <NavbarContainer>
      <Link className='logo' href='/'>
        <img src={'/servicio-social/feria-solidaridad/images/logo-feria.png'} alt="logo" width={82} height={82} />
        <h1>Feria de la solidaridad</h1>
      </Link>
      <div className='links'>
        <Link href='/instituciones'>Instituciones</Link>
        <Link href='/proyectos'>Proyectos</Link>
        <Link href='/eventos'>Eventos</Link>
      </div>
      <Hamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
      <DropdownMenu isOpen={isOpen} />
    </NavbarContainer>
  )
}

export default NavBar