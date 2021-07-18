const controller = require("../controllers/alunos");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){

    app.post("/alunos/signin", controllerAuth.logar);
    // POST aluno
    app.post("/alunos", controller.inserirAluno);

    app.use("/alunos", controllerAuth.checar);
    // GET /aluno?nome=victor
    app.get("/alunos", controller.listarAlunos);

    // GET /alunos/id
    app.get("/alunos/:id", controller.buscarAlunoPorId);

    app.get("/alunos/:id/matriculas", controller.obterMatriculas);

    app.get("/alunos/:id/disciplinas", controller.obterDisciplinas);

    

    // DELETE aluno/id
    app.delete("/alunos/:id", controller.removerAluno);
}