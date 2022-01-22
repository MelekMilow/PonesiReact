import React from 'react';
import Jelo from "./Jelo";

function Pocetna({jelovnik}) {
    return (
        <div>
            {jelovnik.map((jelo)=>(
                <Jelo key={jelo.id} jelo={jelo}/>
            ))}
        </div>
    );
}

export default Pocetna;