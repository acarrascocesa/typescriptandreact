import { useState, useEffect, useRef } from 'react';
import { reqRes } from '../api/reqRes';
import { ReqResList, Usuario } from '../interfaces/reqRes'

const Usuarios = () => {

  const [users, setUsers] = useState<Usuario[]>([])

  const paginaRef = useRef(0);

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {

    const resp = await reqRes.get<ReqResList>("/users", {
      params: {
        page: paginaRef.current
      }
    })
    if (resp.data.data.length > 0) {
      setUsers(resp.data.data);
      paginaRef.current ++;
    } else {
      alert("No hay mas usuarios")
    }
    
  }


  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <th><img src={usuario.avatar} alt="avatar" style={{ width: 50, borderRadius: 100 }} /></th>
        <th>{usuario.first_name} {usuario.last_name}</th>
        <th>{usuario.email}</th>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios: </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => renderItem(user))
          }
        </tbody>
      </table>

      <button className='btn btn-primary' onClick={cargarUsuarios}>Siguientes</button>

    </>
  )
}

export default Usuarios