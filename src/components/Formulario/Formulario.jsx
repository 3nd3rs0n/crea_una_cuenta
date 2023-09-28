import { useState } from "react"
import Alert from "../Alert/Alert";

export const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState(false)

    const validarDatos = (e) => {
        e.preventDefault()

        if(password !== confirmPassword){
            setError(true)
            return

        }
        setError(false)
        setNombre("")
        setemail("")
        setpassword("")
        setconfirmPassword("")
    }

  return (
    <>
    <form 
    className="d-flex flex-column gap-2"
    onSubmit={validarDatos}>
        {error && 
        <Alert
        mensaje = "las contraeñas deben de ser iguales"
        />}
        <div className="form-group">
            <input 
            type="text"
            name="nombre" 
            placeholder="Nombre completo"
            className="form-control shadow" 
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            />
        </div>
        <div className="form-group">
            <input 
            type="email"
            name="email"
            placeholder="correo@correo.com"
            className="form-control shadow" 
            onChange={(e) => setemail(e.target.value)}
            value={email}
            />

        </div>
        <div className="form-group">
            <input 
            type="password"
            name="password"
            placeholder="******"
            className="form-control shadow" 
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            />

        </div>
        <div className="form-group">
            <input 
            type="password"
            name="confirmPassword"
            placeholder="******"
            className="form-control shadow" 
            onChange={(e) => setconfirmPassword(e.target.value)}
            value={confirmPassword}
            />

        </div>

        <button type="submit" className="btn-btn-success mt-3"> Registrar</button>


   
    </form>

    </>
  )
}

export default Formulario
