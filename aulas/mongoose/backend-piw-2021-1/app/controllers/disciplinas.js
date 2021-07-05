const Disciplina = require("../models/disciplina");
const viewDisciplinas = require("../views/disciplinas");

module.exports.listarDisciplinas = function(req, res){
    let promise = Disciplina.find().exec();
    promise.then(function(disciplina){
        res.status(200).json(viewDisciplinas.renderMany(disciplina));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não deu!"});
    })
}

module.exports.inserirDisciplinas = function(req, res){
    let disciplina = req.body;
    let promise = Disciplina.create(disciplina);
    promise.then(function(disciplina){
        res.status(201).json(viewDisciplinas.render(disciplina));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não deu!"});
    })
}