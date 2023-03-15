import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import Hamburguer from './HamburgerMenu/Hamburguer'

import { NavbarContainer } from './NavBar.styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter()
  const institucion = router.pathname.includes('instituciones')
  const proyects = router.pathname.includes('proyectos')
  const events = router.pathname.includes('eventos')
  return (
    <NavbarContainer>
      <Link className='logo' href='/'>
        <img src={'/servicio-social/feria-solidaridad/images/logo-feria.png'} alt="logo" width={82} height={82} />
        <h1>Feria de la solidaridad</h1>
      </Link>
      <div className='links'>
        <Link href='/instituciones' className={`${institucion ? 'active' :''}`}>Instituciones</Link>
        <Link href='/proyectos' className={`${proyects ? 'active' : ''}`}>Proyectos</Link>
        <Link href='/eventos' className={`${events ? 'active' : ''}`}>Eventos</Link>
      </div>
      <Hamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
      <DropdownMenu isOpen={isOpen} />
    </NavbarContainer>
  )
}

export default NavBar