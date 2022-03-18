import React from "react";
// import "./socialcalculator.css";
import { Formik } from "formik";
import { dinamicTitle } from "../../utils/dinamicTitle";

const SocialCalculator = () => {
  dinamicTitle("Calculadora Social");
  return (
    <div id="body " className="perfil px-4 py-2">
      {/* header y navbar lateral */}

      <div className="container m-4">
        <div className="container">
          <Formik
            initialValues={{
              salario: "",
              meses: "",
              resultado: "",
            }}
            validate={(valores) => {
              let errores = {};

              if (valores.meses < 0) {
                errores.meses = "Los meses no pueden ser un numero negativo";
              }

              if (valores.salario < 0) {
                errores.salario = "El salario no puede ser un número negativo";
              }

              return errores;
            }}
            onSubmit={(valores) => {
              let formulaCTS = () => {
                let mesesADias = valores.meses * 30;
                let x = valores.salario;
                let formula = (x / 360) * mesesADias;
                valores.resultado = formula;
                return formula;
              };

              console.log(formulaCTS());
            }}
          >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
              <form className="calculadora-form" onSubmit={handleSubmit}>
                {console.log(errors)}
                <h3>
                  Cálculo de la Gratificación en la liquidación de beneficios
                  sociales al término de la relación laboral
                </h3>
                <div>
                  <label htmlFor="salario">Salario</label>

                  <input
                    type="number"
                    id="salario"
                    name="salario"
                    placeholder="Ej. 930"
                    value={values.salario}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    // onChange={(event) => setName(event.currentTarget.value)}
                  />
                  {errors.salario && (
                    <div className="error">{errors.salario}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="meses">Numero de meses</label>
                  <input
                    type="number"
                    id="meses"
                    name="meses"
                    value={values.meses}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    // onChange={(event) => setLastname(event.currentTarget.value)}
                  />
                  {errors.meses && <div className="error">{errors.meses}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="resultado">Resultado</label>
                  <input
                    type="number"
                    id="resultado"
                    name="resultado"
                    value={values.resultado}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    disabled={true}
                  />
                </div>
                {errors.salida && <div className="error">{errors.salida}</div>}
                {/* <div>
                  <label htmlFor="motivo">Motivo de cese</label>
                  <select name="cese">
                    <option value="voluntaria">Renuncia Voluntaria</option>
                    <option value="Despido">Despido Involuntario</option>
                  </select>
                </div> */}
                <button type="submit" className="boton-register p-2 btn-sub">
                  Calcular
                </button>
              </form>
            )}
          </Formik>

          <Formik
            initialValues={{
              salario: "",
              ingreso: "",
              salida: "",
            }}
            validate={(valores) => {
              let errores = {};

              if (valores.salida < valores.ingreso) {
                errores.salida =
                  "la fecha de salida no puede ser menor que la de entrada";
              }

              if (valores.salario < 0) {
                errores.salario = "El salario no puede ser un número negativo";
              }

              return errores;
            }}
            onSubmit={(valores) => {
              console.log(valores.salida);
              console.log("Formulario enviado");
            }}
          >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
              <form className="calculadora-form" onSubmit={handleSubmit}>
                {console.log(errors)}
                <h3>
                  Calculo del CTS en la liquidación de beneficios sociales al
                  termino de la relación laboral
                </h3>
                <div>
                  <label htmlFor="salario">Salario</label>

                  <input
                    type="number"
                    id="salario"
                    name="salario"
                    placeholder="Ej. 930"
                    value={values.salario}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    // onChange={(event) => setName(event.currentTarget.value)}
                  />
                  {errors.salario && (
                    <div className="error">{errors.salario}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="meses">Numero de meses</label>
                  <input
                    type="number"
                    id="meses"
                    name="meses"
                    value={values.meses}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    // onChange={(event) => setLastname(event.currentTarget.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="resultado">Resultado</label>
                  <input
                    type="number"
                    id="resultado"
                    name="resultado"
                    value={values.salida}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    disabled={true}
                  />
                </div>
                {errors.salida && <div className="error">{errors.salida}</div>}
                {/* <div>
                  <label htmlFor="motivo">Motivo de cese</label>
                  <select name="cese">
                    <option value="voluntaria">Renuncia Voluntaria</option>
                    <option value="Despido">Despido Involuntario</option>
                  </select>
                </div> */}
                <button type="submit" className="boton-register p-2 btn-sub">
                  Calcular
                </button>
              </form>
            )}
          </Formik>
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
              {/* <footer>
                <div className="footer-vertical color-base d-flex align-items-center justify-content-center text-light logo ">
                  <h5>© Copyright ©2022 All rights reserved LegalWork</h5>
                </div>
              </footer> */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCalculator;
