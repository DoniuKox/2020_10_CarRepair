import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import jwt_decode from 'jwt-decode'


class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('userToken')
        localStorage.removeItem('carsToken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Logowanie
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Rejestracja
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Profil
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/usercar" className="nav-link">
                    Moje Pojazdy
                </Link>
            </li>
            <li className="nav-item">
                <a href=" " onClick={this.logOut.bind(this)} className="nav-link">
                    Wyloguj
                </a>
            </li>
        </ul>
        )
        const workshopLink = (
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Warsztat
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/timetable" className="nav-link">
                    Harmonogram
                </Link>
            </li>
            <li className="nav-item">
                <a href=" " onClick={this.logOut.bind(this)} className="nav-link">
                    Wyloguj
                </a>
            </li>
        </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center"
                id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Strona główna
                            </Link>
                        </li>
                    </ul>
                    {localStorage.userToken ? (jwt_decode(localStorage.userToken).workshop===0 ? userLink : workshopLink) : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)