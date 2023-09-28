import React, { useState } from "react";
import Alert from "../Alert/Alert";
import Formulario from "../Formulario/Formulario";
import SocialButton from "../SocialButton/SocialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
  const [mensaje, setMensaje] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState(""); // Opcional para cambiar el color de la alerta

  const mostrarMensaje = (texto, tipo) => {
    setMensaje(texto);
    setTipoAlerta(tipo);
  };

  return (
    <div className="card p-4">
      <h1 className="text-center">Crea una cuenta</h1>
      <p className="text-center">O utiliza tus redes sociales para registrarte</p>

      <SocialButton
        instagram={<FontAwesomeIcon icon={faInstagram} size="2x" />}
        facebook={<FontAwesomeIcon icon={faFacebook} size="2x" />}
        youtube={<FontAwesomeIcon icon={faYoutube} size="2x" />}
      />
      <br />

      <Formulario mostrarMensaje={mostrarMensaje} />

      {mensaje && (
        <Alert mensaje={mensaje} tipo={tipoAlerta} />
      )}
    </div>
  );
};

export default Registro;