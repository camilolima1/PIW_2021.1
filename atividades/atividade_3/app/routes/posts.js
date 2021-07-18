const controller = require("../controllers/posts");
const controllerAuth = require("../controllers/auth");

module.exports = function(app){
    app.use("/api/posts", controllerAuth.checar);

    app.get("/api/posts", controller.listarPosts);

    app.get("/api/posts/:id", controller.buscarPostPorId);

    app.get("/api/posts/:id/comentarios", controller.obterComentarios);
   
    app.post("/api/posts", controller.inserirPost);

    app.delete("/api/posts/:id", controller.removerPost);
}