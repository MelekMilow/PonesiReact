import React from 'react';
import Jelo from "./Jelo";

function SvePorudzbine({porudzbine}) {
    return (
        <div className='pocetna' >
            <h2 className='naslovStrane'>Sve porudzbine</h2>
            <div className=' row row-cols-1 row-cols-sm-2 g-3'>
                {porudzbine.map((porudzbina)=>(
                    <div key={porudzbina.id}>
                        <Jelo  jelo={porudzbina} napraviPorudzbinu={()=>{}} porudzbina={1}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SvePorudzbine;