import "./Comentario.css";

export function Comentario({ id, nomeUsuario, texto, idPost }) {
    return (
        <div className="card_comentario">
            <span className="card_comentario-nome">{nomeUsuario}</span>
            <span className="card_comentario-mensagem">{texto}</span>
        </div>
    );
}