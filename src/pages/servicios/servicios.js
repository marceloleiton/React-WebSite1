import React from 'react';
import { Mision, Mision2, educacion, ecoturismo, ecoturismo2, ecoturismo3, construccion, ayuda, impulsar ,social} from './Data';
import { InfoSectionNormal, InfoSectionNormal2} from '../../components';

const servicios = () => {
    return (
        <>
         
            <InfoSectionNormal {...Mision} />
            <InfoSectionNormal2 {...Mision2} />
            <InfoSectionNormal2 {...educacion} />
            
            <InfoSectionNormal {...ecoturismo} />
            <InfoSectionNormal2 {...ecoturismo2} />
            <InfoSectionNormal2 {...ecoturismo3} />
            <InfoSectionNormal {...construccion} />
            <InfoSectionNormal {...ayuda} />
            <InfoSectionNormal {...impulsar} />
            <InfoSectionNormal {...social} />
        </>
    );
};
export default servicios;