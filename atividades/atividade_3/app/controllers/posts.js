const Post = require("../models/post");
const viewPost = require("../views/post");
const Comentario = require("../models/comentario");
const viewComentarios = require("../views/comentarios");
const jwt = require("jsonwebtoken");

module.exports.inserirPost = function(req, res){
    let texto = req.body.texto;
    let likes = req.body.likes;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.create({texto: texto, likes: likes, id_usuario: id_usuario_logado});
    promise.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(500).json({
            "mensagem": "Não deu!"
        });
    })
}

module.exports.listarPosts = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.find({id_usuario: id_usuario_logado}).exec();
    promise.then(function(post){
        res.status(200).json(viewPost.renderMany(post));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Tente novamente depois!",
        })
    })
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(viewPost.renderById(post));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Tente novamente depois!",
        })
    })
}

module.exports.removerPost = function(req, res){
    let id = req.params.id;

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    let promise = Post.findById(id).exec();
    promise.then(function(post){
        if(post.id_usuario == id_usuario_logado){
            Post.findByIdAndDelete(id)
            .then(function(post){
                res.status(200).json(viewPost.render(post));
            })
            .catch(function(erro){
                res.status(404).json({
                    mensagem: "Post não encontrado!"
                });
            })
        } else {
            res.status(403).json({
                mensagem: "Usuário não autorizado!"
            });
        }
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Post não encontrado!"
        });
    })
}

module.exports.obterComentarios = function(req, res) {
    let id = req.params.id;
    let promise = Comentario.find({id_post:id}).exec();
    promise.then(function(post){
        res.status(200).json(viewComentarios.renderMany(post));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Post não possui comentários!", 
            error: error
        });
    });
}