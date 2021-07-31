import { NavLink } from "react-router-dom"
import "./Navegador.css"

export function Navegador() {
    let id = 15;
    return (
        <nav className="navegador">
            <NavLink
                className="link-navegador"
                exact to="/"
            >
                Página Principal
            </NavLink>
            <NavLink
                className="link-navegador"
                to="/matriculas"
            >
                Listar Matrículas
            </NavLink>
            <NavLink
                className="link-navegador"
                to={"/matriculas/" + id}
            >
                Ir para detalhes
            </NavLink>
        </nav>
    )
}