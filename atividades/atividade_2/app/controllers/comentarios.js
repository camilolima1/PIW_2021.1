const Comentario = require("../models/comentario");
const viewComentario = require("../views/comentarios");

module.exports.inserirComentario = function(req, res){
    let comentario = req.body;
    let promise = Comentario.create(comentario);
    promise.then(function(comentario){
        res.status(201).json(viewComentario.render(comentario));
    }).catch(function(error){
        res.status(500).json({
            "mensagem": "Não deu!"
        });
    })
}

module.exports.listarComentarios = function(req, res){
    let promise = Comentario.find().exec();
    promise.then(function(post){
        res.status(200).json(viewComentario.renderMany(post));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Tente novamente depois!",
        })
    })
}

module.exports.removerComentario = function(req, res){
    let id = req.params.id;
    let promise = Comentario.findByIdAndRemove(id);
    promise.then(function(post){
        res.status(200).json(viewComentario.render(post));
    }).catch(function(error){
        res.status(404).json({
            mensagem: "Post não encontrado!",
            error: error
        });
    })
}