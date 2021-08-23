import { Navegador } from "../../commom/Navegador/Navegador";

export function PaginaDetalheDisciplina(props) {
    return (
        <>
            <Navegador />
            <h1>
                Detalhes da disciplina com id {props.match
                .params.id}
            </h1>
        </>
    );
}