import React from 'react';
import { Mision, Mision2, educacion } from './Data';
import { InfoSectionNormal} from '../../components';

const servicios = () => {
    return (
        <>
            
            <InfoSectionNormal {...Mision} />
            <InfoSectionNormal {...Mision2} />
            <InfoSectionNormal {...educacion} />
        </>
    );
};
export default servicios;