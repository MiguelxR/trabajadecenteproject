import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import seguridadAPI from "../utils/seguridadAPI";

import "../css/contactform.css";
import { dinamicTitle } from "../utils/dinamicTitle";
import SidebarPrueba from "../components/shared/SidebarPrueba";

const Contactform = () => {
  dinamicTitle("Consulta/Asesoria");
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [consult, setConsult] = useState("");

  const subConsult = (e) => {
    e.preventDefault();
    const body = {
      celular: cell,
      email: email,
      mensaje: consult,
    };
    seguridadAPI.post("EnviarMail", body).then((res) => {
      alert(
        "En las proximas 24 Hrs se estara comunicando con su persona, uno de Nuestros Asesores via Correo Electronico!!"
      );
      navigate("/profile");
    });
  };

  return (
    <div id="body">
      {/* header y navbar lateral */}
      <header
        style={{ backgroundColor: "rgb(66, 189, 236, 1)" }}
        className="sticky-top navbar-derechos logo"
      >
        <SidebarPrueba></SidebarPrueba>
      </header>
      {/* parrafo explicativo */}
      <div className="container m-4">
        <div className="container">
          <form action="action_page.php">
            <label htmlFor="name">Nombre</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              // onChange={(event) => setName(event.currentTarget.value)}
            />
            <label htmlFor="lastname">Apellidos</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Apellido"
              // onChange={(event) => setLastname(event.currentTarget.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
            <label htmlFor="call">Número de contacto</label>
            <input
              type="text"
              id="telefono"
              name="call"
              placeholder="999-999-999"
              onChange={(event) => setCell(event.currentTarget.value)}
            />
            <label htmlFor="subject">Consulta</label>

            <select
              name="select"
              onChange={(event) => setConsult(event.currentTarget.value)}
            >
              <option defaultValue="True">Seleccionar Consulta</option>
              <option value="Laboral/PAGOS INCOMPLETOS">
                Laboral/PAGOS INCOMPLETOS
              </option>
              <option value="Laboral/DISCRIMINACION">
                Laboral/DISCRIMINACION
              </option>
              <option value="Laboral/DENUNCIA">Laboral/DENUNCIA</option>
              <option value="Tributario/RENTAS">Tributario/RENTAS</option>
              <option value="Tributario/DONACIONES">
                Tributario/DONACIONES
              </option>
              <option value="Tributario/SUCESIONES">
                Tributario/SUCESIONES
              </option>
              <option value="Tributario/TRANSMICIONES PATRIMONIALES">
                Tributario/TRANSMICIONES PATRIMONIALES
              </option>
            </select>

            <button
              className="boton-register p-2"
              onClick={(e) => subConsult(e)}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      {/* acordeones */}
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              {/* section 5 */}
              <div className="footer-container" />
              {/* footer Copyright */}
              <footer>
                <div className="footer-vertical color-base d-flex align-items-center justify-content-center text-light logo ">
                  <h5>© Copyright ©2022 All rights reserved LegalWork</h5>
                </div>
              </footer>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
