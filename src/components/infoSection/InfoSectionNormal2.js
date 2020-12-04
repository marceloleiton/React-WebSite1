import React from 'react'; 
import {Link} from 'react-router-dom';
import { Container, Button } from "../../globalStyles";

import AnimatedShowMore from 'react-animated-show-more';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    SubTitle2,
    SubTitle3,
    ImgWrapper,
    Img
} from './InfoSection.3elements';

const InfoSectionNormal =({ primary,lightBg, imgStart,lightTopLine,lightTextDesc,
    buttonLabel, description, description2,description3,headLine,lightText,topLine,img,alt,start}) =>{
    return (
        <>
            <InfoSec lightBg={lightBg}>
  
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>    
                                <Heading lightText={lightText}>{headLine}</Heading>                                           
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <SubTitle2 lightTextDesc={lightTextDesc}>{description2}</SubTitle2>
                                <SubTitle3 lightTextDesc={lightTextDesc}>{description3}</SubTitle3>
                            </TextWrapper>             
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
                
            </InfoSec>            
        </>

    );
};

export default InfoSectionNormal;


