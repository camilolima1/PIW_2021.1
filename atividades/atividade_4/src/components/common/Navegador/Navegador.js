import "./Navegador.css"

export function Navegador() {
    return (
        <nav>
            <span>Rede Social</span>

            <div>
                <button className="active">Linha do tempo</button>
                <button>Postar</button>
                <span>Camilo Lima</span>
            </div>
        </nav>
    );
}