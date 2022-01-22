import React from 'react';
import {Link} from "react-router-dom";

function NavigacioniMeni(props) {
    const stil={backgroundColor:'rgba(253,204,142,0.46)'}
    return (
        <nav className="navbar navbar-expand-xl navbar-light " style={stil}>
            <div className="container-fluid">
                <p className="navbar-brand" >Ponesi</p>
                <div className="collapse navbar-collapse show" id="navbarBasic">
                    <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Početna</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dodajHranu">Dodaj hranu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/porudzbine">Vidi sve porudžbine</Link>
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