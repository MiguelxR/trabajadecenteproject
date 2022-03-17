import React from "react";
import "./socialcalculator.css";
import { Formik } from "formik";

const SocialCalculator = () => {
  return (
    <div id="body">
      {/* header y navbar lateral */}
      <header
        style={{ backgroundColor: "rgb(66, 189, 236, 1)" }}
        className="sticky-top navbar-derechos logo"
      >
        <div className="nav flex-column">
          <div className="navbar">
            <nav className="navbar navbar-light fixed-top">
              <div className="container-fluid">
                <div className="navbar-brand" style={{ color: "white" }}>
                  <h1 className="Derechos-title">
                    Calculadora de prestaciones sociales
                  </h1>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  style={{ backgroundColor: "white" }}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <img src="" alt="logo" />
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Trabaja Decente
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="offcanvas-body"
                    style={{ backgroundColor: "#42bdec" }}
                  >
                    <ul className="navbar-nav flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link active"
                          aria-current="page"
                          href="index.html"
                        >
                          <img
                            src="imagenes/home.png"
                            alt="inicio"
                            width={50}
                            height={44}
                          />
                          Inicio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="derecho.html"
                        >
                          <img
                            src="/assets/img/legal.png"
                            alt="derechos"
                            width={50}
                            height={44}
                          />
                          Derechos Laborales
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="tributos.html"
                        >
                          <img
                            src="imagenes/money-bag (1).png"
                            alt="tributacion"
                            width={50}
                            height={44}
                          />
                          Tributación
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="sunafil.html"
                        >
                          <img
                            src="imagenes/college.png"
                            alt="sunafil"
                            width={50}
                            height={44}
                          />
                          Sunafil
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="profile"
                        >
                          <i
                            className="fas fa-calculator"
                            style={{ fontSize: "45px", marginRight: "9px" }}
                          />
                          Mi perfil
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div />
          </div>
        </div>
      </header>
      {/* parrafo explicativo */}

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

export default SocialCalculator;
