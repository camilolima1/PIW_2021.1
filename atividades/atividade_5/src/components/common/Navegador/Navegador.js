import { NavLink } from "react-router-dom";

import "./Navegador.css";

export function Navegador() {
    return (
        <nav>
            <NavLink
                className="link-navegador"
                exact to="/"
            >
                <span>Rede Social</span>
            </NavLink>
            <div>
                <NavLink
                    className="link-navegador"
                    exact to="/"
                >
                    Linha do tempo
                </NavLink>
                <NavLink
                    className="link-navegador"
                    exact to="/postar"
                >
                    Postar
                </NavLink>
                <span>Camilo Lima</span>
            </div>
        </nav>

    );
}