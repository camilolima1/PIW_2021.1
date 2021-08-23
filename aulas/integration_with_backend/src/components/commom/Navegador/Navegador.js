import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../../App";
import "./Navegador.css"

function NavegadorLogado({ nome }) {
    const {setAuth} = useContext(AuthContext);

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
            <div className="link-navegador" 
                style={{ "marginLeft": "auto" }}
                onClick={()=>{setAuth({token:null, nome:null})}}
            >
                Logout
            </div>
            <div className="link-navegador">
                {nome}
            </div>
        </nav>
    );
}

function NavegadorNaoLogado() {
    return (
        <nav className="navegador">
            <NavLink
                className="link-navegador"
                style={{ "marginLeft": "auto" }}
                to={"/cadastro/"}
            >
                Cadastrar
            </NavLink>
            <NavLink
                className="link-navegador"
                to={"/login/"}
            >
                Login
            </NavLink>
        </nav>
    );
}

export function Navegador() {
    const { auth } = useContext(AuthContext);
    return (
        <div>
            {
                auth.token == null ? 
                    <NavegadorNaoLogado></NavegadorNaoLogado> : 
                    <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </div>
        // 
        // <nav className="navegador">
        //     <NavLink
        //         className="link-navegador"
        //         exact to="/"
        //     >
        //         Página Principal
        //     </NavLink>
        //     <NavLink
        //         className="link-navegador"
        //         to="/matriculas"
        //     >
        //         Listar Matrículas
        //     </NavLink>
        //     <NavLink
        //         className="link-navegador"
        //         style={{ "marginLeft": "auto" }}
        //         to={"/cadastro/"}
        //     >
        //         Cadastrar
        //     </NavLink>
        //     <NavLink
        //         className="link-navegador"
        //         to={"/login/"}
        //     >
        //         Login
        //     </NavLink>
        // </nav>
    )
}