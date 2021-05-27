let alunos = [
    {id:5, nome:"Victor", sobrenome:"Farias"},
    {id:8, nome:"Victor", sobrenome:"Sousa"},
    {id:10, nome:"Luis", sobrenome:"Andrade"},
];

module.exports.listarAlunos = function(req, res){
    let alunos_retorno = alunos;
    if(req.query.nome){
        let nome = req.query.nome;
        alunos_retorno = alunos_retorno.filter(function(aluno){
            return aluno.nome==nome;
        });
    }
    res.json(alunos_retorno);
}

module.exports.buscarAlunoPorId = function(req, res) {
    let id = req.params.id;
    let aluno = alunos.find(function(aluno){
        return (aluno.id == id);
    });
    if(aluno){
        res.json(aluno);
    }else{
        res.status(404).json({mensagem:"Aluno " +id+" nao encontrado"});
    }
 
}

module.exports.inserirAluno = function(req, res){
    let aluno = req.body;
    alunos.push(aluno);
    res.status(201).json(aluno);
}

module.exports.removerAluno = function(req, res){
    let id = req.params.id;
    alunos = alunos.filter(function(aluno){
        return aluno.id!=id;
    });
    res.json({mensagem:"aluno foi removido"});
}