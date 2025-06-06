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
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Lista classi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/confronto"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Confronta classi
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/preferiti"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
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