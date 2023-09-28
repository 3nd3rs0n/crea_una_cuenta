import Alert from "../Alert/Alert"
import Formulario from "../Formulario/Formulario"
import SocialButton from "../SocialButton/SocialButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" // este importa font awesome global
// import {faBell} from "@fortawesome/free-solid-svg-icons" // este importa los iconos (no lo estoy usando)
import{faFacebook,faYoutube,faInstagram} from "@fortawesome/free-brands-svg-icons" // este importa los iconos de redes sociales 



const Registro = () => {
  return (
    <div>
        <h1>crea una cuenta</h1>
        <p>o usa tus redes sociales para registrarte</p>
        
        <SocialButton
        instagram = {<FontAwesomeIcon icon={faInstagram} size="2xl"  />}
        facebook = {<FontAwesomeIcon icon={faFacebook} size="2xl"  />} 
        youtube = {<FontAwesomeIcon icon={faYoutube} size="2xl" />} 
        
        />
        <br />
        
        <Formulario/>
        
        
    
       
        
    </div>
  )
}

export default Registro