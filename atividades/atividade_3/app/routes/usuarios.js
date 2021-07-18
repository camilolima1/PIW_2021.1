const controller = require("../controllers/usuarios");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.post("/api/usuarios", controller.inserirUsuario);

    app.post("/api/usuarios/signin", controllerAuth.signin);

    app.use("/api/usuarios", controllerAuth.checar);
    app.get("/api/usuarios", controller.listarUsuarios);
    app.get("/api/usuarios/:id", controller.buscarUsuarioPorId);
    app.get("/api/usuarios/:id/posts", controller.obterPosts);
    app.delete("/api/usuarios/:id", controller.removerUsuario);
}