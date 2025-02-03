import { Routes, Route } from "react-router"

import { Login, Logout } from "../Components/Login"
import Protect from "../Auth/Protect"

import Hub from "../Components/Landing"
import NotFound from "../Components/NotFound"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"

const Router = () => {
    return (
      <Routes>
        <Route index element={<Hub />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/contact" element={<Protect page={<Contact />} />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/hero/:id" element={<Protect page={<Hero />} />}/>
      </Routes>
    );
}

export default Router