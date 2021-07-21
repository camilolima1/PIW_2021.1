import "./Post.css";
export function Post({nomeUsuario, texto, qtdLikes}) {
    return(
        <div className="card">
            <span className="card_nome">{nomeUsuario}</span>
            <span className="card_mensagem">{texto}</span>
            <div className="container_likes">
                <span className="card_mensagem-like">{qtdLikes} Like</span>
                <button className="card_mensagem-like_button">Curtir</button>
            </div>
        </div>
    );
}