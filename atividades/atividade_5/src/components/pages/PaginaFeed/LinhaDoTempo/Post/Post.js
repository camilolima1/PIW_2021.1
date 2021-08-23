import "./Post.css";
export function Post({nomeUsuario, texto, qtdLikes, children}) {

    return(
        <div className="container-card">
            <div className="card">
                <span className="card_nome">{nomeUsuario}</span>
                <span className="card_mensagem">{texto}</span>
                <div className="container_likes">
                    <span className="card_mensagem-like">{qtdLikes} Like</span>
                    <button className="card_mensagem-like_button">Curtir</button>
                </div>
            </div>
            <div className="comentarios">
                {children}
            </div>
            <div className="form-post">
                <input type="text" placeholder="Escreva a sua mensagem..." />
            </div>
        </div>
    );
}