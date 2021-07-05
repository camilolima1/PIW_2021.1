const controller = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/api/comentarios", controller.listarComentarios);
    app.post("/api/comentarios", controller.inserirComentario);
    app.delete("/api/comentarios/:id", controller.removerComentario);
}