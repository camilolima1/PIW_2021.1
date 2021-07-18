const Comentario = require("../models/comentario");
const viewComentario = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.inserirComentario = function(req, res){
    let texto = req.body.texto;
    let id_post = req.body.id_post;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.create({texto: texto, id_post: id_post, id_usuario: id_usuario_logado});

    promise.then(function(comentario){
        res.status(201).json(viewComentario.render(comentario));
    }).catch(function(error){
        res.status(500).json({
            "mensagem": "Não deu!"
        });
    })
}

module.exports.listarComentarios = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.find({id_usuario: id_usuario_logado}).exec();
    promise.then(function(post){
        res.status(200).json(viewComentario.renderMany(post));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Tente novamente depois!"
        })
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Comentario.findById(id).exec();
    promise.then(function(comentario){
        if(id_usuario_logado == comentario.id_usuario){
            Comentario.findByIdAndDelete(id).exec()
            .then(function(comentario){
                res.status(200).json(viewComentario.render(comentario));
            })
            .catch(function(erro){
                res.status(404).json({
                    mensagem: "Comentário não encontrado!"
                });
            })
        } else {
            res.status(403).json({
                mensagem: "Usuário não autorizado!"
            });
        }
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Comentario não encontrado!"
        });
    })
}