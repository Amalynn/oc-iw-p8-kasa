import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo/logo-colors.svg';

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo de Kasa" />
            </Link>

            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
