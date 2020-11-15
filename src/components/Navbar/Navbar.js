//rfce para crear automatico importar react funcion
import React, {useState} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext} from 'react-icons/lib'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon/>
                        LACASADELAMOR
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick}>
                            <NavItem> 
                                <NavLinks to='/'>inicio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='
                                /nosotros'>nosotros</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='
                                /servicios'>servicios</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
                </Nav>
            </IconContext.Provider> 
        </>
    )};

export default Navbar
