import "./FormPostar.css";

export function FormPostar({onClick}) {
    return (
        <div className="form_postar">
            <textarea id="txtArea" placeholder="Escreva sua mensagem..."></textarea>
            <button onClick={onClick} className="form_postar-button">Submeter</button>
        </div>
    );
}