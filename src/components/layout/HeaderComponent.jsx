import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar medieval-navbar">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <NavLink className="navbar-brand" to="/">
                        <span className="brand-text">D&D Realm</span>
                    </NavLink>
                    <ul className="navbar-nav nav-inline">
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                className="nav-link"
                                activeClassName="active-link"
                            >
                                Lista classi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/confronto"
                                className="nav-link"
                                activeClassName="active-link"
                            >
                                Confronta classi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/preferiti"
                                className="nav-link"
                                activeClassName="active-link"
                            >
                                Preferiti
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}