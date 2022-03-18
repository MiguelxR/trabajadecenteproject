import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

import "../../css/navbarUser.css";
import seguridadAPI from "../../utils/seguridadAPI";
// import SidebarPrueba from "./SidebarPrueba";
const NavbarUser = () => {
  const location = useLocation();
  const id = sessionStorage.getItem("id");
  const [perfil, setPerfil] = useState([]);
  useEffect(() => {
    seguridadAPI.get(`ListarUsuarios?tipo=1&usuario=${id}`).then((res) => {
      console.log(res);
      setPerfil(res.data);
    });
  }, [id]);
  return (
    <div>
      <div className="nav-user d-flex align-items-center justify-content-between px-5">
        <div className="py-3 d-flex flex-column justify-content-evenly ">
          {location.pathname.includes("explotation") && (
            <div>
              <h1 className="m-0">Home Tools</h1>
            </div>
          )}
          {location.pathname.includes("Derechos") && (
            <div>
              <h1 className="m-0">Derechos Laborales</h1>
            </div>
          )}
          {location.pathname.includes("tributos") && (
            <div>
              <h1 className="m-0">Tributacion</h1>
            </div>
          )}
          {location.pathname.includes("calculators") && (
            <div>
              <h1 className="m-0">Calculadoras Sociales</h1>
            </div>
          )}
          {location.pathname.includes("sunafil") && (
            <div>
              <h1 className="m-0">Info Sunafil</h1>
            </div>
          )}
          {location.pathname.includes("consult") && (
            <div>
              <h1 className="m-0">Asesorias</h1>
            </div>
          )}
          {location.pathname.includes("profile") && (
            <div>
              <h1 className="m-0">Perfil</h1>
            </div>
          )}

          {/* <div className="d-flex">
            <p className="m-0">usuario:</p>
            {perfil.map((user, index) => {
              return (
                <div key={index + user}>
                  <strong className="mx-2">{user.Nombre}</strong>
                </div>
              );
            })}
          </div> */}
        </div>
        <div className="w-25 h-100 d-flex justify-content-center align-items-center">
          {/* <SidebarPrueba></SidebarPrueba> */}
          <img
            className="w-100 h-100"
            src="/assets/img/perfil.svg"
            alt="Cargando..."
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
