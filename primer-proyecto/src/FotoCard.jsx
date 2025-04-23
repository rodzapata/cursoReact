import './FotoCard.css'

export const  FotoCard =({nombre, usuario}) =>{
    return(
        <article className="avatar">
            <header className="avatar-titulo">
                <img className="avatar-titulo-imagen" src="../src/assets/foto_rodney.jpeg" alt="Foto" />
                <div className="avatar-info">
                    <strong>{nombre}</strong>
                    <span>{usuario}</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>

            </aside>
        </article>
    )
}