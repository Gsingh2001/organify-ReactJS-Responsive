import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            {/* Navbar section */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="/" >
                        <img src="assets/logo-2.png" height="120px" width="120px" className="img-fluid" alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link text-dark active" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar section */}
        </div>
    );
}

export default Header;
