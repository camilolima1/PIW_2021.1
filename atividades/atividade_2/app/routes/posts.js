const controller = require("../controllers/posts");

module.exports = function(app){
    app.get("/api/posts", controller.listarPosts);

    app.get("/api/posts/:id", controller.buscarPostPorId);

    app.get("/api/posts/:id/comentarios", controller.obterComentarios);
   
    app.post("/api/posts", controller.inserirPost);

    app.delete("/api/posts/:id", controller.removerPost);
}