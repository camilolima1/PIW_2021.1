const postsControllers = require("../controllers/postsControllers");

module.exports = function(app){
    app.get("/api/posts", postsControllers.listPosts);
    app.get("/api/posts/:id", postsControllers.getPostById);
    app.post("/api/posts", postsControllers.addPost);
    app.delete("/api/posts/:id", postsControllers.removePost);
}