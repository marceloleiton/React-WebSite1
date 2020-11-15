//rfce para crear automatico importar react funcion
import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon} from './Navbar.elements'
import { IconContext} from 'react-icons/lib'
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
               </NavbarContainer>
            </Nav>
        </IconContext.Provider> 
    </>
    )
}

export default Navbar
