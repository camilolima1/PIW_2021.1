import axios from "axios";

export function cadastrar(aluno){
    return axios({
        method: "POST",
        url: "http://localhost:8393/alunos",
        data: aluno,
    })
}

export function login(Login_data){
    return axios({
        method:"POST",
        url:"http://localhost:8393/alunos/signin",
        data:Login_data,
    })
}