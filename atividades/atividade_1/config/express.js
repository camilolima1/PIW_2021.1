// Importando módulo express (Padrão CommonJS)
const express = require('express');
// Importando router users
const usersRoutes = require("../app/routes/usersRoutes");
// Importando routes posts
const postsRouter = require("../app/routes/postsRoutes");

const bodyParser = require("body-parser");

// Exportando módulo (Padrão CommonJS)
module.exports = function() {
    let app = express();
    // Definindo variável de aplicação
    app.set("port", 8393);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(express.static("./public"));

    usersRoutes(app);
    
    postsRouter(app);
    return app;
}