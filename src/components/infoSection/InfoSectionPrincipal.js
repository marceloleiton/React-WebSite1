import React from 'react'; 
import {Link} from 'react-router-dom';
import { Container, Button } from "../../globalStyles";
import {
    InfoSecImg,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const InfoSectionPrincipal =({ primary,lightBg, imgStart,lightTopLine,lightTextDesc,
    buttonLabel,description,headLine,lightText,topLine,img,alt,start}) =>{
    return (
        <>
            <InfoSecImg lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to='/contacto'>
                                    <Button big fontBing primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSecImg>            
        </>

    );
};

export default InfoSectionPrincipal;


