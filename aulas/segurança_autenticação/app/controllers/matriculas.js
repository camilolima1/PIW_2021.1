const Matricula = require("../models/matricula");
const viewMatriculas = require("../views/matriculas");
const jwt = require("jsonwebtoken");

module.exports.inserirMatricula = function(req, res){
    let id_disciplina = req.body.disciplina;
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_aluno_logado = payload.id;

    let promise = Matricula.create({disciplina: id_disciplina, aluno: id_aluno_logado});
    promise.then(function(matricula){
        res.status(201).json(viewMatriculas.render(matricula));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não deu!"});
    });
}

module.exports.listarMatriculas = function(req, res){
    let token = req.headers.token;
    let payload = jwt.decode(token);
    let id_aluno_logado = payload.id;

    let promise = Matricula.find({aluno: id_aluno_logado})
                            .populate("disciplina").populate("aluno").exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatriculas.renderMany(matriculas));
    }).catch(function(error){
        res.status(500).json({mensagem: "não foi dessa vez"});
    })
}