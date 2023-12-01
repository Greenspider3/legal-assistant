import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'grey' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600, color: 'black' }}>
                    <span>NYAAY SAHAAYAK</span><br />
                    <span>-A LEGAL ASSISTANT</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Categories" style={{ color: 'black' }}>Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Aboutus" style={{ color: 'black' }}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Contactus" style={{ color: 'black' }}>Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown" style={{ position: 'absolute', right: 0 }}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>&gt; Using our website</a></li>
                                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>&gt; FAQs</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;