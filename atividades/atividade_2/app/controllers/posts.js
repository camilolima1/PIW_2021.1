const Post = require("../models/post");
const viewPost = require("../views/post");
const Comentario = require("../models/comentario");
const viewComentarios = require("../views/comentarios");

module.exports.inserirPost = function(req, res){
    let post = req.body;
    let promise = Post.create(post);
    promise.then(function(post){
        res.status(201).json(viewPost.render(post));
    }).catch(function(error){
        res.status(500).json({
            "mensagem": "Não deu!"
        });
    })
}

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
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
    let promise = Post.findByIdAndRemove(id);
    promise.then(function(post){
        res.status(200).json(viewPost.render(post));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Post não encontrado!",
            error: error
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