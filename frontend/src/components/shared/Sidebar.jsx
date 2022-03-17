import React from "react";
import { Link } from "react-router-dom";
import "../../css/sidebar.css";
const Sidebar = () => {
  const cerrarSesion = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-logo py-2 px-4 d-flex align-items-center justify-content-evenly">
        <img className="w-25 h-100" src="/assets/img/logowork.png" alt="" />
        <h5 className="offcanvas-title text-dark" id="offcanvasNavbarLabel">
          Trabaja Decente
        </h5>
      </div>
      <ul className="w-100 m-0 p-0 text-light">
        <Link to="/" className="text-light">
          <li className="w-100 ops-sidebar px-3 d-flex align-items-center  ">
            <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-house-chimney iconos-sidebar"></i>
            </div>
            <h6 className="m-0 mx-2">Inicio</h6>
          </li>
        </Link>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-gavel iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Derecho Laboral</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-file-invoice-dollar iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Tributacion</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-calculator iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Calculadoras</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-building-columns iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">SUNAFIL</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-user iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Perfil</h6>
        </li>
      </ul>
      <Link to="/" className="text-light" onClick={cerrarSesion}>
        <div className="cerrar-sesion w-100 m-0 p-0">
          <div className="w-100 ops-sidebar-cerrar px-3 d-flex align-items-center ">
            <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-door-open iconos-sidebar"></i>
            </div>
            <h6 className="m-0 mx-2">Cerrar Sesion</h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
