import { Navegador } from "../commom/Navegador";
import { Conteudo } from "./ConteudoPaginaPrincipal";

import "./PaginaPrincipal.css";

function Cabecalho({paginaAtual}) {
    return (
        <header className="cabecalho">
            <h1 className="logo">Matricula UFC QXD</h1>
            <span className="pagina-atual">Você esta na {paginaAtual}</span>
        </header>
    )
}

export function PaginaPrincipal() {
    return (
        <>
            <Cabecalho paginaAtual="página de matrícula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
        </>
    )
}