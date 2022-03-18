import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";
// import "../css/ComponetsMix.css";
const Explotacion = () => {
  dinamicTitle("Home Tools");
  return (
    <div className="perfil px-4 py-2">
      <div>
        <header>
          <div className="container">
            <div className="seccion_uno">
              <div className="titulo">
                <h1 className="titulo">EXPLOTACION LABORAL E INFORMALIDAD</h1>
              </div>
              <div className="imagen">
                {/* <img src="img/explotacion.jpg" alt="cargando..." /> */}
              </div>
            </div>
          </div>
        </header>
        <div className="contenido">
          <p>
            En el Perú no hay cifras exactas de la explotación laboral debido a
            que este tipo de actividad se da más en el ámbito privado. "En un
            país como el nuestro, con el 70% de informalidad, la explotación
            laboral adopta características de invisibilidad y anonimato que la
            hacen muy difícil de detectar", indicó Andrea Querol, presidenta de
            CHS Alternativo.
            <br />
            <br />
            Teresa Torres, coordinadora del Proyecto contra el Trabajo Forzoso,
            de la Organización Internacional del Trabajo (OIT), señaló que la
            explotación laboral involucra desde condiciones indebidas de
            trabajo, hasta situaciones de mayor gravedad y de carácter
            delictivo, como el trabajo forzoso, en el cual se afecta no solo la
            libertad de la persona sino además la dignidad humana.
          </p>
          <br />
          <br />
          <p>
            Debido a esta situación la Declaración de los Derechos Humanos
            contempla en su artículo 23 que toda persona tiene derecho a su
            libre elección y a condiciones de trabajo favorables. Sumado a esto,
            la Organización de las Naciones Unidas (ONU), mediante los Objetivos
            de Desarrollo Sostenible (ODS), propone como indispensable para el
            desarrollo inclusivo y sostenible de toda sociedad, el objetivo 8:
            el trabajo decente. Con esto nos referimos a cómo las personas
            pueden relacionarse con su trabajo en condiciones de dignidad,
            seguridad de ingresos y seguridad personal. En esta línea
          </p>
          <br />
          <br />
          <p>
            Otro dato importante a tener en cuenta es que según la Secretaría
            Nacional de la Juventud (SENAJU), la población juvenil se entiende
            como personas entre 15 a 29 años. La cual para el 2020 alcanzó los 7
            869 975 de personas; es decir, la cuarta parte de la población
            total. Además, 61,4% forma parte de la población económicamente
            activa (INEI, 2020); es decir, casi 5 millones de jóvenes trabajan.
            Lo alarmante es la cantidad de los que laboran en el sector
            informal.
            <br />
            <br />
            Finalmente, es importante entender a la informalidad no solo como un
            enfoque vinculado a la decisión lucrativa o interesada de algunos,
            sino también como la consecuencia de la precariedad de mecanismos
            que puedan evitarla. De esta forma, poder alcanzar el desarrollo
            económico que necesitamos, y principalmente el respeto de dignificar
            el trabajo de todas y todos los que habitan nuestro país.
          </p>
        </div>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </div>
  );
};

export default Explotacion;
