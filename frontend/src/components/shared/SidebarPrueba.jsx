import React from "react";
import "../../css/sidebar.css";
const SidebarPrueba = () => {
  return (
    <div>
      <div className="nav flex-column">
        <div className="navbar">
          <nav className="navbar navbar-light ">
            <div className="container-fluid">
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
                  <img src="../../../assets/img/logowork.png" alt="logo" />
                  <h5
                    className="offcanvas-title text-dark"
                    id="offcanvasNavbarLabel"
                  >
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
                    <li className="w-100 ops-sidebar px-3 d-flex align-items-center  ">
                      <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
                        <i className="fa-solid fa-house-chimney iconos-sidebar"></i>
                      </div>
                      <h6 className="m-0 mx-2">Inicio</h6>
                    </li>
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
                  <div className="cerrar-sesion w-100 m-0 p-0 pe-3">
                    <div className="w-100 ops-sidebar-cerrar px-3 d-flex align-items-center ">
                      <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
                        <i className="fa-solid fa-door-open iconos-sidebar"></i>
                      </div>
                      <h6 className="m-0 mx-2">Cerrar Sesion</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div />
        </div>
      </div>
    </div>
  );
};

export default SidebarPrueba;
