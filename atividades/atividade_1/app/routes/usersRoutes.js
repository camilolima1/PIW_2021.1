const usersControllers = require("../controllers/usersControllers");

module.exports = function(app){
    app.get("/api/usuarios", usersControllers.listUsers);
    app.get("/api/usuarios/:id", usersControllers.getUserById);
    app.post("/api/usuarios", usersControllers.addUser);
    app.delete("/api/usuarios/:id", usersControllers.removeUser);
}