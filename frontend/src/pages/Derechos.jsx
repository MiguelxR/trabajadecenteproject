import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";
import "../css/ComponetsMix.css";

const Derechos = () => {
  dinamicTitle("Derechos");
  return (
    <div className="perfil px-4 py-2">
      <div>
        {/* <header>
          <div className="container">
            <div className="seccion_uno">
              <div className="titulo">
                <h1 className="title">
                  DERECHOS <br />
                  LABORALES
                </h1>
              </div>
              <div className="imagen">
                {/* <img src="img/derechos.jpg" alt="cargando" /> */}
        {/* </div>
            </div>
          </div>
        </header> */}
        <div className="contenido">
          <p>
            Los derechos del trabajador o derechos laborales son un conjunto de
            obligaciones que debe cumplir el empleador y que están reguladas por
            una serie de normas y leyes del estado peruano. En el Perú, las
            instituciones encargadas de velar por los derechos que le
            corresponden al trabajador son el Ministerio de Trabajo, la
            Superintendencia de Nacional de Fiscalización Laboral (SUNAFIL) y el
            Poder Judicial a través de los juzgados laborales y otras salas.
            <br />
            <br />A continuación te damos más detalles sobre los beneficios que
            tienes por ley al encontrarte en planilla, entre otros datos
            importantes que debes conocer.
          </p>
          <h3>El contrato de trabajo</h3>
          <p>
            El contrato de trabajo es el acuerdo entre trabajador y empleador.
            En él se determinan las características de la relación laboral.
            Contiene un conjunto de condiciones que ambos se comprometen a
            cumplir. Todo contrato tiene 3 elementos esenciales: la prestación
            del servicio, la remuneración y la subordinación.
          </p>
          <h4>¿Cuál es la importancia del contrato de trabajo?</h4>
          <p>
            Su importancia consiste en brindar seguridad a las partes, sobre
            todo al trabajador. El contrato otorga derechos, deberes y
            obligaciones a ambas partes. Tales como la obligación del trabajador
            de prestar el servicio y la del empleador de pagar la remuneración
            que corresponde. Sin embargo, el contrato laboral no es necesario
            para presumir la existencia de una relación de trabajo. De esa
            manera, que no se haya firmado dicho documento no niega las
            obligaciones del empleador ante su trabajador. Esto se conoce como
            el Principio de primacía de la realidad.
          </p>
          <h4>¿Qué datos contiene un contrato de trabajo?</h4>
          <p>
            Los datos que debe contener todo contrato de trabajo son los
            siguientes:
          </p>
          <br />
          <ul>
            <li>Fecha y lugar de la celebración del contrato.</li>
            <li>Datos del trabajador y del empleador o empresa.</li>
            <li>Actividades que conforman el trabajo.</li>
            <li>Condiciones de la prestación del trabajo.</li>
            <li>Remuneración y otros beneficios.</li>
            <li>Tiempo de vigencia del contrato</li>
            <li>Otros aspectos.</li>
          </ul>
          <h4>¿Cómo se acredita la existencia de un contrato laboral?</h4>
          <p>
            Cualquier comunicación entre trabajador y empleador sobre temas
            laborales puede servir para acreditar la existencia de una relación
            de trabajo. Estos pueden estar registrados en documentos de la
            empresa, computadoras o teléfonos. También sirven grabaciones en el
            centro de trabajo, tarjetas o identificaciones, testimonio de
            clientes o trabajadores, etc.
          </p>
          <h3>Vacaciones</h3>
          <p>
            Solo el trabajador en planilla tendrá 30 días de vacaciones luego de
            cumplir 1 año en su centro de trabajo. Los trabajadores part-time no
            tienen estipuladas las vacaciones, pero en algunas empresas,
            mediante el convenio de la OIT, se les otorga 7 días de descanso
            luego de 1 año. En caso que el trabajador no quiera salir de
            vacaciones, la norma estipula que solo podrá vender la mitad de sus
            vacaciones. En el caso de un trabajador regular, solo serán 15 días
            vendidos y 15 descansados.
          </p>
          <h3>Horario de trabajo</h3>
          <p>
            La jornada laborar, en un trabajador en planilla de Régimen
            Ordinario, debe ser de 8 horas diarias o 48 horas semanales. Así
            mismo, tener descansos semanales y en días feriados. Para el régimen
            de par time, ellos trabajan menos de 4 horas diarias. Y en el caso
            de los practicantes, dependerá de su horario de estudios.
          </p>
          <h3>CTS</h3>
          <p>
            La CTS (Compensación por tiempo de servicio) es un beneficio social
            de previsión que ha sido regulado con la finalidad de otorgar a los
            trabajadores y a su familia un ingreso que le permita cubrir las
            contingencias que genera el cese en el trabajo.
            <br />
            <br />
            El único trabajador que cuenta con este derecho laboral, es el de
            planilla de Régimen Ordinario. Los colaboradores part-time no tienen
            estabilidad laboral con este derecho.
          </p>
          <h3>Seguros</h3>
          <p>
            De estar en el Régimen Ordinario, la empresa está obligada a
            inscribir a su colaborador en EsSalud. Este cargo es para el
            empleador. Si está laborando en una pequeña empresa, de la misma
            manera. En cambio, en el régimen de micro empresa, está el tema del
            SIS que es subvencionado una parte por el Estado y otra por el
            empleador. Adicionalmente, los trabajadores pueden acceder a las EPS
            con un pago adicional.
          </p>
          <h3>Aporte de pensiones</h3>
          <p>
            El Perú tiene un esquema de pensiones mixto. Los trabajadores pueden
            elegir entre pertenecer al Sistema Nacional de Pensiones (SNP), a
            cargo de la ONP, o al Sistema Privado de Pensiones (SPP),
            administrado por las AFP. Si eliges el sistema AFP, tu aporte
            mensual sería de 11.97% mensual, mientras que con el sistema publico
            de la ONP tu aporte sería del 13.0%.
          </p>
          <h3>Liquidación</h3>
          <p>
            La liquidación de beneficios sociales se refiere al pago de todos
            los beneficios pendientes una vez finalizada la relación de trabajo.
            Ello incluye aquellos que comprenden desde la Compensación por
            Tiempo de Servicios (CTS). Incluyendo a su vez, las vacaciones
            truncas, gratificaciones truncas, entre otros.
            <br />
            <br />
            Cuando el trabajador cesa definitivamente sus labores, el empleador
            debe cancelarle todos los derechos económicos que le adeude hasta
            ese momento. Normalmente: vacaciones, gratificaciones, CTS,
            indemnización por despido, asignación familiar, horas extras,
            remuneraciones y participación en utilidades. Para ello realiza una
            liquidación de todos los conceptos adeudados y eso se llama
            coloquialmente liquidación de beneficios sociales.
          </p>
          <h4>¿Cuándo se paga la liquidación?</h4>
          <p>
            El pago se realizará dentro de las 48 horas de producido el cesa de
            la trabajadora o el trabajador. De lo contrario empezará a
            computarse intereses laborales fijados por la Superintendencia de
            Banca y Seguros.
          </p>
          <h4> ¿Qué sucede si no se paga a tiempo?</h4>
          <p>
            Si la entidad empleadora no paga la liquidación en el plazo, la
            trabajadora o el trabajador tiene la opción de recurrir a un proceso
            inefectivo. Este es realizado por la Superintendencia Nacional de
            Fiscalización Laboral. También puede acudir a un proceso
            conciliatorio en el Ministerio del Trabajo y Promoción del Empleo.
            También ante el poder Judicial. Las trabajadoras y los trabajadores
            tienen 4 años para exigir el pago de beneficios sociales y
            remuneraciones de devengados. Estos deben ser computados desde el
            cese de la relación laboral
          </p>
        </div>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </div>
  );
};

export default Derechos;
