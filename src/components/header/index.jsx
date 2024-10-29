import { Link, NavLink } from "react-router-dom";
import './header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>

                <NavLink to='/places'>
                    Places
                </NavLink>
            </nav>
        </header>
    )
}