import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvider'

const Header = () => {
  const { user } = useAuth()

  return (
    <header className="bg-dark py-3">
      <nav className="container d-flex justify-content-between">
        <Link to="/" className="text-white text-decoration-none">Home</Link>
        <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
        {user ? (
          <Link to="/logout" className="text-white text-decoration-none">Log out</Link>
        ) : (
          <Link to="/login" className="text-white text-decoration-none">Log in</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
