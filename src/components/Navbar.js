import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { collapsed: true };
    }

    toggleNavbar = () => {
        this.setState(
            (prevState) => ({
                collapsed: !prevState.collapsed
            })
        )
    }

    render() {

        const status = this.state.collapsed ? 'collapsed' : 'show';

        return (
            <nav className="navbar navbar-light bg-light justify-content-between py-0">
                <div className="navbar-brand">Navbar Toggler</div>
                <div className="navbuttons">
                    <button onClick={this.toggleNavbar} className={`navbar-toggler navbar-toggler-right ${status}`} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${status}`} id="navbarToggler">
                        <ul className="navbar-nav mr-auto navbar-right">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li><Link to={'/about'} className="nav-link">About</Link></li>
                            <li><Link to={'/credits'} className="nav-link">Credits</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
