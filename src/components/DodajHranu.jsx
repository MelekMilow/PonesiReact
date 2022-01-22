import React from 'react';

function DodajHranu({dodajHranu}) {
    return (
        <form onSubmit={dodajHranu} className="dodajHranu">
            <h2>Dodaj hranu</h2>
            <br/>
            <input type="text" className="form-control" placeholder="Naziv"/>
            <br/>
            <textarea type="text" className="form-control" placeholder="Opis"/>
            <br/>
            <input type="text" className="form-control" placeholder="Cena"/>
            <br/>
            <input type="text" className="form-control" placeholder="Prosecno vreme za isporuku"/>
            <br/>
            <button className='btn btn-success' type='submit'>Dodaj</button>
            <button className='btn btn-secondary' type='reset'>Reset</button>
        </form>
    );
}

export default DodajHranu;
