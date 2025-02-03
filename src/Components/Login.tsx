import { Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";
import { useState, FormEvent } from "react";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, user } = useAuth();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      { user ? 
        <Navigate to="/" />
      : 
        <div className="container mt-5">
          <h2 className="text-center mb-4">Se connecter</h2>
          <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Se connecter</button>
          </form>
        </div>
      }
    </>
  );
}

function Logout() {
  const { logout, user } = useAuth();

  return (
    <>
      { user ? 
        <div className="container mt-5 text-center">
          <button onClick={logout} className="btn btn-danger">Se déconnecter</button>
        </div>
      : 
        <Navigate to="/" />
      }
    </>
  )
}

export { Login, Logout };
