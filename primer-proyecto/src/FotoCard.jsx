import logo from "../src/assets/foto_rodney.jpeg"

export const  FotoCard =() =>{
    return(
        <article>
            <header>
                <img src="../src/assets/foto_rodney.jpeg" alt="Foto" />
                <div>
                    <strong>Rodney Zapata</strong>
                    <span>rozapata</span>
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