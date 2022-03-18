import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";
// import "../css/ComponetsMix.css";
const Sunafil = () => {
  dinamicTitle("Info Sunafil");
  return (
    <div className="perfil px-4 py-2">
      <div>
        <header>
          <div className="container">
            <div className="seccion_uno">
              <div className="titulo">
                <h1 className="title">SUNAFIL</h1>
              </div>
              <div className="imagen">
                {/* <img src="img/sunafil.jpg" alt="Cargando..." /> */}
              </div>
            </div>
          </div>
        </header>
        <div className="contenido">
          <p>
            La Superintendencia Nacional de Fiscalización Laboral (SUNAFIL) es
            la entidad pública mediante la cual el Estado Peruano cumple el
            compromiso de garantizar el respeto de los derechos de los
            trabajadores, así como generar las condiciones adecuadas para el
            desarrollo de las actividades económicas de las empresas,
            promoviendo su formalidad y productividad.
          </p>
          <h3>Funciones de la SUNAFIL</h3>
          <p>
            La SUNAFIL tiene como función principal la de regular las relaciones
            entre trabajadores y sus empleadores en todo el país, asegurándose
            que se cumplan las normas y se respeten los derechos y libertades de
            ambas partes.
            <br />
            <br />
            Ademas de ello la SUNAFIL posee otras funciones especificas como:
            <br />
            <br />
          </p>
          <ul>
            <li>
              Vigilar y exigir el cumplimiento de la ley laboral y los derechos
              de los trabajadores.
            </li>
            <li>
              Formular y proponer leyes y normas en materia de derechos
              laborales.
            </li>
            <li>
              Realizar y promover actividades de fomento de las normas
              laborales.{" "}
            </li>
            <li>
              Brindar asistencia técnica especializada a los trabajadores y
              empleadores.
            </li>
            <li>Ejecutar las funciones de la fiscalización laboral.</li>
          </ul>
          <h3>La Fiscalización laboral</h3>
          <p>
            Se trata de un procedimiento rutinario que llevan a cabo los
            funcionarios e inspectores de la SUNAFIL. Consiste en una serie de
            visitas y revisiones de la actividad empresarial para garantizar que
            las relaciones laborales se desarrollen con armonía, legalidad y
            veracidad.
            <br />
            <br />
            Todas las empresas se encuentran obligadas a someterse a una
            fiscalización por lo menos una vez al año. Esta también se puede
            producir por solicitud o denuncia del trabajador, o bien por
            voluntad del organismo.
            <br />
            <br />
          </p>
        </div>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </div>
  );
};

export default Sunafil;
