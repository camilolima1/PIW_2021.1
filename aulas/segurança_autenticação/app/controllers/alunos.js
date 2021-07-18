const Aluno = require("../models/aluno");
const Matricula = require("../models/matricula");
const view = require("../views/alunos");
const viewMatriculas = require("../views/matriculas");
const viewDisciplinas = require("../views/disciplinas");
const bcrypt = require("bcrypt");

module.exports.listarAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(function(aluno){
        res.status(200).json(view.renderMany(aluno));
    }).catch(function(error){
        res.status(500).json({
            mensagem: "Não deu!",
            error: error,
        })
    })
}

module.exports.buscarAlunoPorId = function(req, res) {
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(function(aluno){
        res.status(200).json(view.render(aluno));
    }).catch(function(error){
        res.status(400).json({mensagem: "Não deu!", error: error});
    });
}

module.exports.inserirAluno = function(req, res){
    // let aluno = req.body;
    let aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha, 10),
    }
    
    let promise = Aluno.create(aluno);
    //função chamada quando a requisição ao banco foi concluida
    //recebe o aluno inserido como parametro
    promise.then(function(aluno){
        res.status(201).json(view.render(aluno));
    }).catch(function(){
        res.status(201).json({mensagem: "Sua requisição não foi feita!"});
    })
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findByIdAndRemove(id);
    promise.then(function(aluno){
        res.status(200).json(view.render(aluno));
    }).catch(function(error){
        res.status(500).json({error: error});
    })
}

module.exports.obterMatriculas = function(req, res){
    let id = req.params.id;
    let promise = Matricula.find({aluno:id}).exec();
    promise.then(function(matriculas){
        res.status(200).json(viewMatriculas.renderMany(matriculas));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não foi dessa vez!"});
    })
}

module.exports.obterDisciplinas = function(req, res){
    let id = req.params.id;
    let promise = Matricula.find({aluno:id}).populate("disciplina").exec();
    promise.then(function(matriculas){
        let disciplinas = matriculas.map(function(matricula){return matricula.disciplina});
        res.status(200).json(viewDisciplinas.renderMany(disciplinas));
    }).catch(function(error){
        res.status(500).json({mensagem: "Não foi dessa vez!"});
    })
}