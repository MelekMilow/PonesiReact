import React from 'react';
import Jelo from "./Jelo";

function Pocetna({jelovnik}) {
    return (
        <div className='pocetna' >
            <h2 className='naslovStrane'>Jelovnik</h2>
            <div className=' row row-cols-1 row-cols-sm-2 g-3'>
                {jelovnik.map((jelo)=>(
                    <Jelo key={jelo.id} jelo={jelo}/>
                ))}
            </div>
        </div>
    );
}

export default Pocetna;