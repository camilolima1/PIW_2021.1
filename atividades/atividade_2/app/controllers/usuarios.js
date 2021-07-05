const Usuario = require("../models/usuario");
const viewUsuario = require("../views/usuario");
const Post = require("../models/post");
const viewPosts = require("../views/post");

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    let promise = Usuario.create(usuario);
    promise.then(function(usuario){
        res.status(201).json(viewUsuario.render(usuario));
    }).catch(function(){
        res.status(500).json({
            mensagem: "Sua requisição não foi feita!"
        });
    })
}

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.renderMany(usuario));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Tente novamente depois!",
        })
    })
}

module.exports.buscarUsuarioPorId = function(req, res) {
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Usuário não cadastrado!", 
            error: error
        });
    });
}

module.exports.removerUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findByIdAndRemove(id);
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Usuário não encontrado!",
            error: error
        });
    })
}

module.exports.obterPosts = function(req, res) {
    let id = req.params.id;
    let promise = Post.find({id_usuario:id}).exec();
    promise.then(function(post){
        res.status(200).json(viewPosts.renderMany(post));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Usuário não possui posts!", 
            error: error
        });
    });
}