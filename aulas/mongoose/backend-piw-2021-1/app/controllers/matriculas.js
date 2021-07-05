const Matricula = require("../models/matricula");
const viewMatriculas = require("../views/matriculas");

module.exports.inserirMatricula = function(req, res){
    let matricula = req.body;
    let promise = Matricula.create(matricula);
    promise.then(function(matricula){
        res.status(201).json(viewMatriculas.render(matricula));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não deu!"});
    });
}

module.exports.listarMatriculas = function(req, res){
    let promise = Matricula.find().populate("disciplina").populate("aluno").exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatriculas.renderMany(matriculas));
    }).catch(function(error){
        res.status(500).json({mensagem: "não foi dessa vez"});
    })
}