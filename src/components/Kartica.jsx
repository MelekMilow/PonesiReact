import React from 'react';
import {Link} from "react-router-dom";

function Kartica({putanja,tekst}) {
    return (
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={putanja}>{tekst}</Link>
        </li>
    );
}

export default Kartica;