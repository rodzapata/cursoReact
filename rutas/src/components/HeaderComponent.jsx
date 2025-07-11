import { Link } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    <header>
        <h1>Bienvenido</h1>
        <nav>
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/blog">Blog </Link>
        </nav>
    </header>
  )
}
