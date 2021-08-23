export function PaginaDetalheMatricula(props) {
    return (
        <div>
            <h1>Página Detalhe Matricula</h1>
            <p>Aqui mostra as informações da matrícula {props.match.params.id}</p>
        </div>
    );
}