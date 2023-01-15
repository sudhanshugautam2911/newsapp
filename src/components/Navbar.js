import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">In-Depth News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>

                                <li className="nav-item"><Link className="nav-link" to='general'>General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='business'>Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='entertainment'>Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='health'>Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='science'>Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='sports'>Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='technology'>Technology</Link></li>


                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <div className={`form-check form-switch text-${this.props.mode === 'light'? 'dark':'light'}`}>
                                    <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
