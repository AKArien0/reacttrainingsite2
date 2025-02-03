import { useState } from "react"
import { Navigate, Link } from "react-router-dom"

const NotFound = () => {
    const [redirectNow, setRedirectNow] = useState(false)
    setTimeout(() => {
        setRedirectNow(true)
    }, 3000)

    return (
        <>
            {redirectNow ?
                <Navigate to="/" />
            :
                <h1>
                    Not found
                    <br />
                    <Link to="/">Return to home</Link>
                </h1>
            }
        </>
    )
}

export default NotFound