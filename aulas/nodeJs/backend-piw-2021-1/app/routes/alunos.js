const controller = require("../controllers/alunos");

module.exports = function(app){
    // GET /alunos
    // GET /aluno?nome=victor
    app.get("/alunos", controller.listarAlunos);

    // GET /alunos/id
    app.get("/alunos/:id", controller.buscarAlunoPorId);

    // POST aluno
    app.post("/alunos", controller.inserirAluno);

    // DELETE aluno/id
    app.delete("/alunos/:id", controller.removerAluno);
}