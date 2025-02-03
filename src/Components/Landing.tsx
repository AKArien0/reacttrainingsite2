import Search from "./Search"
import { useAuth } from "../Auth/AuthProvider";

const Hub = () => {
    const { user } = useAuth();

    return (
        <>
            <h1 className="text-center my-4">
                SurperHub, your hero of the "Super" ones
            </h1>
            <p className="text-center mb-4">
                {user ? 
                    <>
                        Hello, {user.username} ! Search for your favourite, or yourself.
                        <Search apiKey="ae778354697afcadf8531d8da82dd1f2" />
                    </>
                :
                    <>
                        We can tell you all about superheroes after you log in. (username : superman, password : 64)
                    </>
                }
            </p>
        </>
    )
}

export default Hub