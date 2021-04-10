import React from "react"; 
import { NavLink } from "react-router-dom";

const navbar = (props) => (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-3">
                        <NavLink to='/' exact className="nav-link"> Accueil</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to='/annonces' exact className="nav-link"> Annonces</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink to='/contact' exact className="nav-link"> Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;