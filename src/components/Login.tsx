/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: ""
};

type LoginPayload = {
  username: string,
  nombre: string
}

type AuthAction =
  | { type: "logout" }
  | { type: "login", payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

  switch (action.type) {
    case "logout":

      return {
        validando: false,
        token: null,
        nombre: "",
        username: ""
      }

    case "login":
      const {nombre, username} = action.payload;

      return {
        validando: false,
        token: "abc123",
        nombre,
        username
      }

    default:
      return state;
  }
}

const Login = () => {

  const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" })
    }, 1500);

  }, []);

  const login = () => {
    dispatch({type: "login", payload: {nombre: "Angel", username: "AC"}})
  }

  const logout = () => {
    dispatch({type: "logout"})
  }

  if (validando) {
    return (
      <>
        <div className="alert alert-info">
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>

      {
        (token)
          ? <div className="alert alert-success">Autenticado correctamente como: {username}</div>
          : <div className="alert alert-danger">No autenticado</div>
      }

      {
        (token)
          ? <button className="btn btn-danger" onClick={logout}>Logout</button>
          : <button className="btn btn-primary" onClick={login}>Login</button>
      }
    </>
  )
}

export default Login