// Importando módulo express (Padrão CommonJS)
const bodyParser = require('body-parser');
const express = require('express');
// Importando router Alunos
const routerAlunos = require("../app/routes/alunos");
const routerDisciplinas = require("../app/routes/disciplinas");
const routerMatriculas = require("../app/routes/matriculas");

// Exportando módulo (Padrão CommonJS)
module.exports = function() {
    let app = express();
    // Definindo variável de aplicação
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static("./public"));
    routerAlunos(app);
    routerDisciplinas(app);
    routerMatriculas(app);
    return app;
}