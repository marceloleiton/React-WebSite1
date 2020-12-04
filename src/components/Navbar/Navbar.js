//rfce para crear automatico importar react funcion
import React, {useState, useEffect} from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext} from 'react-icons/lib';
import{Button} from '../../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
const [click, setClick] = useState(false)
const[button, setButton]= useState(true);
const handleClick = () => setClick(!click);

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false)
    }else{
        setButton(true)
    }
};
useEffect(()=> {
    showButton();
},[]);

window.addEventListener('resize',showButton);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon/>
                        La Casa del Amor
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem> 
                                <NavLinks to='/'>INICIO</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='servicios'>SERVICIOS</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='
                                /'>NUESTRAS ACCIONES</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to='
                                /'>FOTOGRAFÍAS</NavLinks>
                            </NavItem>


                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/contacto">
                                        <Button primary>CONTACTO</Button>
                                    </NavBtnLink>
                                ):(
                                    <NavBtnLink to="/contacto">
                                         <Button  fontBig primary>
                                            CONTACTO
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider> 
        </>
    )};

export default Navbar
