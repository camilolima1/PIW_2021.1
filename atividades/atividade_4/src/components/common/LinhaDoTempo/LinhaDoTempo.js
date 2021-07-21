import "./LinhaDoTempo.css";
import { Post } from "./Post/Post";

export function LinhaDoTempo() {
    let infoPosts = [
        {
            id: 1,
            nomeUsuario: "João",
            texto: "Menino, tá quente demais hoje",
            qtdLikes: 1
        },
        {
            id:2,
            nomeUsuario: "Tiago",
            texto: "Num aguento mais essa quintura",
            qtdLikes: 3
        },
    ];

    let listaComponentesPosts = infoPosts.map((infoPost) => (
            <Post
                nomeUsuario={infoPost.nomeUsuario} 
                texto={infoPost.texto}
                qtdLikes={infoPost.qtdLikes}
            >
            </Post>
        )
    )
    return (
        <div className="container_linha-do-tempo">
            {listaComponentesPosts}
        </div>
    );
}