import { Navegador } from "../../common/Navegador/Navegador";
import { LinhaDoTempo } from "./LinhaDoTempo/LinhaDoTempo";

import "./PaginaFeed.css";

export function PaginaFeed() {
    return(
        <div className="paginaFeed">
            <Navegador />
            <LinhaDoTempo />
        </div>
    );
}