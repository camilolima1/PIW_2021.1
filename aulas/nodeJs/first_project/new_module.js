function somar(a, b){
    return a+b;
}

let s = "string a ser exportada";

let o = {
    "name": "Camilo",
    "matricula": "1234"
};

module.exports.somar = somar;
module.exports.str = s;
module.exports.obj = o;