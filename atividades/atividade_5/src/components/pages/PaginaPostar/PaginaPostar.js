import history from "../../../history";

import { Navegador } from "../../common/Navegador/Navegador";
import { FormPostar } from "./FormPostar/FormPostar";

import "./PaginaPostar.css";

export function PaginaPostar() {

    function redirecionar() {
        history.push("/");
    }

    return(
        <div className="pagina_postar">
            <Navegador />
            <div>
                <FormPostar onClick={redirecionar} />
            </div>
        </div>
    );
}