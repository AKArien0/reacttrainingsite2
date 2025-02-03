import { ReactNode } from 'react'
import { useAuth } from './AuthProvider'
import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"

interface ProtectProps {
  page: ReactNode;
}

const Protect: React.FC<ProtectProps> = ({ page }) => {
    const { user } = useAuth()
    const [redirectNow, setRedirectNow] = useState(false)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirectNow(true)
        }, 3000)

        return () => clearTimeout(timer) // Clean up the timeout
    }, [])
    
    return (
        <>
            {user ? (
                page
            ) : redirectNow ? (
                <Navigate to="/login" />
            ) : (
                <h1>Please log in to access this page.</h1>
            )}
        </>
    )
}

export default Protect
