import { Navegador } from "../../common/Navegador/Navegador.js";
import { LinhaDoTempo } from "../../common/LinhaDoTempo/LinhaDoTempo.js";

export function PaginaFeed() {
    return(
        <div className="container">
            <Navegador />
            <LinhaDoTempo />
        </div>
    );
}