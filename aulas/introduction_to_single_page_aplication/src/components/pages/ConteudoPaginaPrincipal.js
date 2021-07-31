import classNames from "classnames";
import history from "../../history";

function Card({ disciplina }) {
    let nomeClasses = classNames("card", {
        "fundo-vermelho": !disciplina.disponivel,
    })

    function foiClicado() {
        console.log("foi clicado");
        history.push("./disciplinas/"+disciplina.id);
    }

    return (
        <div onClick={foiClicado} className={nomeClasses}>
            <h3 className="titulo-card">{disciplina.nome}</h3>
            <span className="codigo-card">{disciplina.codigo}</span>
        </div>
    )
}

export function Conteudo() {
    let disciplinas = [
        {
            id: "123",
            nome: "LMS",
            codigo: "QXD253",
            disponivel: false,
        },
        {
            id: "1234",
            nome: "PIW",
            codigo: "QXD5435",
            disponivel: true,
        },
        {
            id: "12345",
            nome: "SOC",
            codigo: "QXD2323",
            disponivel: false,
        },
        {
            id: "123456",
            nome: "IHC",
            codigo: "QXD385",
            disponivel: true,
        },
    ];
    let cards = disciplinas.map((disciplina) => (
                                    <Card 
                                       disciplina={disciplina}
                                    >
                                    </Card>
                                )
                            )
    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
    )
}