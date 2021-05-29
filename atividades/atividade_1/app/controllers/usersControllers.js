let users = [
    {id:1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123"},
];

module.exports.listUsers = function(req, res){
    res.json(users);
}

module.exports.getUserById = function(req, res){
    let id = req.params.id;

    let user = users.find(function(user){
        return (user.id==id);
    });
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({mensagem:"Usuário "+id+" não encontrado!"});
    }
}

module.exports.addUser = function(req, res){
    let user = req.body;
    users.push(user);
    res.status(201).json(user);
}

module.exports.removeUser = function(req, res){
    let id = req.params.id;
    users = users.filter(function(user){
        return user.id!=id;
    });
    res.json({mensagem:"Usuário removido com sucesso!"});
}