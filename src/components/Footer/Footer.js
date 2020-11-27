import React from 'react';
import {Button} from '../../globalStyles'
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
    FooterLinks
} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Si estás interesado en nuestro trabajo ¡Suscribete!
                </FooterSubHeading>
                <FooterSubText> Solo ingresa tu correo y te contactaremos
                    </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Ingrsar correo aquí" />
                        <Button fontBig>Suscribete</Button>  
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>    
                    <FooterLinkItems>
                        <FooterLinksTitle>Nosotros</FooterLinksTitle>
                        <FooterLinks to='/contacto'>Como Funciona</FooterLinks>
                        <FooterLinks to='/'>Como Funciona</FooterLinks>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLinksTitle>Nosotros</FooterLinksTitle>
                        <FooterLinks to='/'>Como Funciona</FooterLinks>
                        <FooterLinks to='/'>Como Funciona</FooterLinks>
                    </FooterLinkItems>
                     
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
