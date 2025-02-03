import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "./Auth/AuthProvider"
import Header from "./Layouts/Header"
import Router from './Routes/Router'
import Footer from "./Layouts/Footer"

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Router />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
