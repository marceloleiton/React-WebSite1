import React from 'react';
import {Button} from '../../globalStyles';
import {FaFacebook, FaInstagram,FaYoutube} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput, 
    FooterLinksContainer, 
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinksTitle,
    FooterLinks,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRight,
    SocialIcons,
    SocialIconLink,
    SocialIcon


} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Si estás interesado en nuestro trabajo ¡Suscribete!
                </FooterSubHeading>
                <FooterSubText> Solo ingresa tu correo y te contactaremos</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Ingresar correo aquí" />
                    <Button fontBig>Suscribete</Button>  
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>    
                    <FooterLinkItems>
                        <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
                        <FooterLinks to='/contacto'>Quienes somos</FooterLinks>
                        <FooterLinks to='/'>Testimonios</FooterLinks>
                        <FooterLinks to='/'>Galería</FooterLinks>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinksTitle>Contacto</FooterLinksTitle>
                        <FooterLinks to='/'>+56959645803</FooterLinks>
                        <FooterLinks to='/'>marcel@gmail.com</FooterLinks>
                        <FooterLinks to='/'>Dirección</FooterLinks>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>  
                    <FooterLinkItems>
                        <FooterLinksTitle>Contacto</FooterLinksTitle>
                        <FooterLinks to='/'>+56959645803</FooterLinks>
                        <FooterLinks to='/'>marceloleiton1997@gmail.com</FooterLinks>
                        <FooterLinks to='/'>Dirección</FooterLinks>
                    </FooterLinkItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        ONG
                    </SocialLogo>
                    <WebsiteRight>La Casa del Amor © Todos los derechos reservados 2020</WebsiteRight>
                    <SocialIcons>


                        <SocialIconLink href='/' target="_blank"
                        aria-label="Facebook">
                            <FaFacebook/> 
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank"
                            aria-label="Instagram">
                        <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank"
                                aria-label="Youtube" rel="noopener noreferrer">
                        <FaYoutube />
                        </SocialIconLink>


                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
