import { Navegador } from "../../commom/Navegador/Navegador";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { inserirMatricula, listarMatriculas } from "../../../api/matriculasAPI";
import { AuthContext } from "../../../App";
import { listarDisciplinas } from "../../../api/disciplinasAPI";

function FormularioMatricula({onSubmeter}) {

    const [disciplinas, setDisciplinas] = useState([]);
    const { auth } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const submeter = (matricula) => {onSubmeter(matricula)};

    useEffect(() => {
        listarDisciplinas(auth.token).then(
            (response) => {
                setDisciplinas(response.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }, []);

    return (
        <form onSubmit={handleSubmit(submeter)}>
            Disciplina: 
            <select name="disciplina" id="" {...register("disciplina", { required: true })}>
                {disciplinas.map(
                    (disciplina) => (
                        <option value={disciplina.id} name="disciplina">
                            {disciplina.nome}
                        </option>
                    )
                )}
            </select> <br />
            <button>Matricular</button>
        </form>
    );
}

function ListarMatriculas({matriculas}){
    let lista = matriculas.map((matricula) => (<li>{matricula.aluno.nome} - {matricula.disciplina.nome}</li>));
    return(
        <ul>
            {lista}
        </ul>
    )
}

export function PaginaListarMatriculas() {
    const [matriculas, setMatriculas] = useState([]);

    const {auth} = useContext(AuthContext);

    const atualizarMatricula = () => {
        listarMatriculas(auth.token).then(
            (response) => {
                setMatriculas(response.data);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        atualizarMatricula();
    }, []);

    const adicionarMatricula = (matricula) => {
        inserirMatricula(auth.token, matricula).then(
            (response) => {
                atualizarMatricula();
        }).catch((error) => {
            console.log(error);
        })
    }
    
    return (
        <div>
            <Navegador />
            <ListarMatriculas matriculas={matriculas}></ListarMatriculas>
            <FormularioMatricula onSubmeter={adicionarMatricula}></FormularioMatricula>
        </div>
    );
}