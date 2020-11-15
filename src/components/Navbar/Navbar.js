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
            //NavMenu es la que contiene los navegadores de la página y la redirección        
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='/'>inicio</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavMenu onClick={handleClick}>
                            <NavItem>
                                <NavLinks to='
                                /nosotros'>nosotros</NavLinks>
                            </NavItem>
                        </NavMenu>
                </NavbarContainer>
                </Nav>
            </IconContext.Provider> 
        </>
    )};

export default Navbar
