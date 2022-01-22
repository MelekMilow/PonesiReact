import React from 'react';

function Jelo({jelo}) {
    const stil={backgroundColor:'rgba(253,204,142,0.74)',color:'#000000'}

    return (
     <div className='col jeloKartica'>
         <div className=" card" style={stil}>
             <div className="card-body">
                 <h5 className="card-title">{jelo.naziv}</h5>
                 <p className="card-text">{jelo.opis}</p>
                 <p className="card-text">{jelo.cena} dinara</p>
                 <a href="#" className="btn btn-success">Poruči</a>
             </div>
             <div className="card-footer" >
                 <p>Očekivano vreme isporuke {jelo.vreme}</p>
             </div>
         </div>
     </div>
    );
}

export default Jelo;