import classNames from "classnames";

function Card({ nome, codigo, disponivel }) {
    let nomeClasses = classNames("card", {
        "fundo-vermelho": !disponivel,
    })
    // let nomeClasse = "card ";
    // if(disponivel===false) {
    //     nomeClasse += "fundo-vermelho";
    // }
    return (
        <div className={nomeClasses}>
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo() {
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD253",
            disponivel: false,
        },
        {
            nome: "PIW",
            codigo: "QXD5435",
            disponivel: true,
        },
        {
            nome: "SOC",
            codigo: "QXD2323",
            disponivel: false,
        },
        {
            nome: "IHC",
            codigo: "QXD385",
            disponivel: true,
        },
    ];
    let cards = disciplinas.map((disciplina) => (
                                    <Card 
                                        nome={disciplina.nome} 
                                        codigo={disciplina.codigo}
                                        disponivel={disciplina.disponivel}
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