import React from 'react';

function NavigacioniMeni(props) {
    const stil={backgroundColor:'rgba(253,204,142,0.46)'}
    return (
        <nav className="navbar navbar-expand-xl navbar-light " style={stil}>
            <div className="container-fluid">
                <p className="navbar-brand" >Ponesi</p>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Početna</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="dodajHranu">Dodaj hranu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="porudzbine">Vidi sve porudžbine</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Pretrazi hranu" />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavigacioniMeni;