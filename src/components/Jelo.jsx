import React from 'react';

function Jelo({jelo}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{jelo.naziv}</h5>
                <p className="card-text">{jelo.opis}</p>
                <p className="card-text">{jelo.cena}</p>
                <a href="#" className="btn btn-primary">Poruči</a>
            </div>
            <div className="card-footer text-muted">
                <p>Očekivano vreme isporuke {jelo.vreme}</p>
            </div>
        </div>
    );
}

export default Jelo;