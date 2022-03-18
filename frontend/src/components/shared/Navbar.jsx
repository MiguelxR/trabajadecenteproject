// import { from } from "nodemailer/lib/mime-node/le-windows";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
const Navbar = () => {
  const cerrarSesion = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
  };
  return (
    <div className="m-0 px-5 sect-navbar d-flex align-items-center justify-content-between">
      <div className="w-25 ">
        <img
          className="w-100 heigth-img"
          src="/assets/img/logo.png"
          alt="Cargando..."
        />
      </div>
      <div className="d-flex align-items-center justify-content-center hidden-xs">
        <Link to="/">
          <button className="text-light botones-nav mx-1">Inicio</button>
        </Link>
        <Link to="#">
          <button className="text-light botones-nav mx-1">
            Sobre nosotros
          </button>
        </Link>
        <Link to="#">
          <button className="text-light botones-nav mx-1">Noticias</button>
        </Link>
        <Link to="#">
          <button className="text-light botones-nav mx-1">Contactanos</button>
        </Link>
        {sessionStorage.getItem("token") ? (
          <div>
            <Link to="/tools/explotation">
              <button className="text-light botones-nav mx-1">
                Herramientas
              </button>
            </Link>
            <a href="/">
              <button
                className="text-light botones-nav mx-1"
                onClick={cerrarSesion}
              >
                Cerrar Sesion
              </button>
            </a>
          </div>
        ) : (
          <div>
            <Link to="/register">
              <button className="text-light botones-nav mx-1">SingUp</button>
            </Link>
            <Link to="/login">
              <button className="text-light botones-nav mx-1">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
