import React, { useState, useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { Link } from 'react-router-dom';


export default function Navbar() {

    const [collapsed, setCollapsed] = useState(true)
    const status = collapsed ? 'collapsed' : 'show';
    //UserContext consumer using Hook -> useContext
    const { user } = useContext(UserContext);

    const toggleNavbar = () => {
        setCollapsed(
            prevState => !prevState
        )
    }

    return (

        <nav className="navbar navbar-light bg-light justify-content-between py-0">
            <div className="navbar-brand">Router Toggler Context</div>
            <div className="navbuttons">
                <button onClick={toggleNavbar} className={`navbar-toggler navbar-toggler-right ${status}`} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${status}`} id="navbarToggler">
                    <ul className="navbar-nav mr-auto navbar-right">
                        <li>
                            <Link
                                to={'/'} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li>
                            <Link to={'/credits'} className="nav-link">Credits</Link>
                        </li>
                        <li>
                            <Link to={'/auth'} className="nav-link">
                                {user ? "Logout" : "Login"}                                </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
