import "./LinhaDoTempo.css";
import { Comentario } from "./Post/Comentario/Comentario";
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
            id: 2,
            nomeUsuario: "Tiago",
            texto: "Num aguento mais essa quintura",
            qtdLikes: 3
        },
        {
            id: 3,
            nomeUsuario: "João",
            texto: "Menino, tá quente demais hoje",
            qtdLikes: 1
        },
        {
            id: 4,
            nomeUsuario: "Tiago",
            texto: "Num aguento mais essa quintura",
            qtdLikes: 3
        },
    ];

    let postComentarios = [
        {
            id: 1,
            texto: "Tá quente demais hoje",
            nomeUsuario: "Caio",
            idPost: 1,
        },
        {
            id: 2,
            texto: "Pois",
            nomeUsuario: "Carlos",
            idPost: 1,
        },
        {
            id: 3,
            texto: "Nem me fale! Tô quase me mudando pra dentro da geladeira",
            nomeUsuario: "Marcos",
            idPost: 2,
        },
        {
            id: 3,
            texto: "Tô derretendo!",
            nomeUsuario: "Marco",
            idPost: 1,
        },
    ];

    function getComentarios(id) {
        let lista = postComentarios.filter((postComentario) =>
                    (id === postComentario.idPost));
      
        return lista.map((postComentario) => (
            <Comentario
                key={postComentario.id}
                id={postComentario.id}
                nomeUsuario={postComentario.nomeUsuario}
                texto={postComentario.texto}
                idPost={postComentario.idPost}
            />
        ));
    }

    let listaComponentesPosts = infoPosts.map((infoPost) => (
        <Post
            key={infoPost.id}
            nomeUsuario={infoPost.nomeUsuario}
            texto={infoPost.texto}
            qtdLikes={infoPost.qtdLikes}
        >
            {getComentarios(infoPost.id)}
        </Post>
    ))

    return (
        <div className="container_linha-do-tempo">
            {listaComponentesPosts}
        </div>
    );
}