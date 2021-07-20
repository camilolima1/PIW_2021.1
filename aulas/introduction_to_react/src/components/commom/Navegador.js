import "./Navegador.css"

export function Navegador() {
    let Link = ({linkTexto}) => (
        <a className="link-navegador" href="http://globo.com">{linkTexto}</a>
    )
    return (
        <nav className="navegador">
            <Link linkTexto="link 1 "></Link>
            <Link linkTexto="link 2 "></Link>
            <Link linkTexto="link 3 "></Link>
        </nav>
    )
}