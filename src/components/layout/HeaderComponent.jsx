import { NavLink } from 'react-router-dom';
import '../../css/HeaderComponent.css';
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar medieval-navbar">
                <div className="
                    container-fluid
                    d-flex
                    flex-column flex-md-row
                    align-items-center
                    justify-content-center justify-content-md-between
                ">
                    <NavLink className="navbar-brand mb-3 mb-md-0" to="/">
                        <span className="brand-text">
                            D&amp;D<GiDiceTwentyFacesTwenty className="d20" />Realm
                        </span>
                    </NavLink>
                    <ul className="
                        navbar-nav nav-inline
                        d-flex flex-row flex-wrap
                        justify-content-center justify-content-md-start
                        gap-2
                    ">
                        <li className="nav-item">
                            <NavLink
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
    );
}