let posts = [
    {id:1, texto: "Oi, tudo bem?", likes: 6},
];

module.exports.listPosts = function(req, res){
    res.json(posts);
}

module.exports.getPostById = function(req, res){
    let id = req.params.id;

    let post = posts.find(function(post){
        return (post.id==id);
    });
    if(post){
        res.json(post);
    }
    else{
        res.status(404).json({mensagem:"Post "+id+" não encontrado!"});
    }
}

module.exports.addPost = function(req, res){
    let post = req.body;
    posts.push(post);
    res.status(201).json(post);
}

module.exports.removePost = function(req, res){
    let id = req.params.id;
    posts = posts.filter(function(post){
        return post.id!=id;
    });
    res.json({mensagem:"Post removido com sucesso!"});
}