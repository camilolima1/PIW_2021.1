import { useContext } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../api/auth";
import { AuthContext } from "../../../App";
import history from "../../../history";
import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/Navegador/Navegador";

function FormularioLogin(){
    const {register, handleSubmit} = useForm();
    const auth = useContext(AuthContext);

    const submeter = (Login_data) => {
        login(Login_data).then((response)=>{
            auth.setAuth({token: response.data.token, nome: response.data.nome});
            history.push("/");
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <form onSubmit={handleSubmit(submeter)}>
            Matricula: <input type="text" name="matricula" {...register("matricula", { required: true })} /><br/>
            Senha: <input type="password" name="senha" {...register("senha", { required: true })}/><br/>
            <button>Login</button>
        </form>
    );
}

export function PaginaLogin(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <Navegador></Navegador>
            <FormularioLogin></FormularioLogin>
        </div>
    );
}