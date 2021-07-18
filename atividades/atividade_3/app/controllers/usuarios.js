const Usuario = require("../models/usuario");
const viewUsuario = require("../views/usuario");
const Post = require("../models/post");
const viewPosts = require("../views/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.inserirUsuario = function(req, res){
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10),
    };

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

    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_usuario_logado = payload.id;

    if(id_usuario_logado != id){
        return res.status(403).json({
            mensagem: "Acesso negado!"
        });
    }

    let promise = Usuario.findByIdAndRemove(id).exec();
    promise.then(function(usuario){
        res.status(200).json(viewUsuario.render(usuario));
    }).catch(function(error){
        res.status(403).json({
            mensagem: "Acesso negado!",
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