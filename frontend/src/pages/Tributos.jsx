import React from "react";
import { dinamicTitle } from "../utils/dinamicTitle";
// import "../css/ComponetsMix.css";
const Tributos = () => {
  dinamicTitle("Tributos");
  return (
    <div className="perfil px-4 py-2">
      <div>
        <header>
          <div className="container">
            <div className="seccion_uno">
              <div className="titulo">
                <h1 className="title">
                  DEBERES <br />
                  TRIBUTARIOS
                </h1>
              </div>
              <div className="imagen">
                {/* <img src="img/deberes.jpg" alt="Cargando..." /> */}
              </div>
            </div>
          </div>
        </header>
        <div className="contenido">
          <p>
            La tributación puede referirse al acto de pagar tributos, así como
            al marco jurídico al que están sujetos los contribuyentes en una
            nación en lo referente a sus deberes con la entidad recaudadora. El
            objetivo de la tributación es que el Estado cuenta con los recursos
            financieros necesarios para operar y brindar, por ejemplo, los
            servicios básicos que ofrece a la población. Todo ello, a través de
            las instituciones públicas.
            <br />
            <br />
            Si no existiera la tributación, el Estado no podría pagar el sueldo
            de sus funcionarios y tampoco sería posible que el Gobierno, por
            ejemplo, financiara obras públicas. Incluso, puede ser que existan
            programas sociales o de apoyo a los sectores más vulnerables que
            estén siendo financiados (parcial o totalmente) con los fondos
            públicos provenientes de la recaudación.
          </p>
          <h3>Regímenes tributarios</h3>
          <p>
            Son las categorías bajo las cuales una Persona Natural o Persona
            Jurídica que posee o va a iniciar un negocio debe estar registrada
            en la SUNAT. El régimen tributario establece la manera en la que se
            pagan los impuestos y los niveles de pagos de los mismos. Puedes
            optar por uno u otro régimen dependiendo del tipo y el tamaño del
            negocio. Hay cuatro regímenes tributarios: Nuevo Régimen Único
            Simplificado (NRUS), Régimen Especial de Impuesto a la Renta (RER),
            Régimen MYPE Tributario (RMT) y Régimen General (RG) puedes conocer
            el ideal para tu negocio.
          </p>
          <h3>Nuevo Régimen Único Simplificado - NRUS</h3>
          <p>
            Si eres una persona natural y vas a iniciar un pequeño negocio como
            bodega, puesto de mercado, zapatería, bazar, restaurante, juguería,
            peluquería u otros y solo emitirás boleta de venta, puedes acogerte
            al NRUS. Ten presente que no puedes estar en el NRUS si tus ingresos
            o compras superan el monto de S/ 8,000 al mes o S/ 96,000 al año.
            Asimismo, es importante que al hacer tus compras exijas la emisión
            de factura, salvo que compres a otras personas que también están en
            el NRUS.
            <br />
            <br />
            En este régimen: <br />
            <br />
          </p>
          <ul>
            <li>No puedes emitir facturas por tus ventas o servicios.</li>
            <li>No necesitas llevar libros contables.</li>
            <li>No estás obligado a presentar declaración anual.</li>
            <li>
              Solo debes hacer un pago único mensual por internet o bancos.
            </li>
          </ul>
          {/* <h4>Restricciones</h4>
          <ul>
            <li>
              Debes realizar actividades en un solo lugar y solo las permitidas
              en el Nuevo RUS.
            </li>
            <li>
              Tus activos fijos no deben superar el valor de S/ 70,000 soles,
              salvo si son vehículos o predios.
            </li>
          </ul>
          <h3>Régimen Especial de Renta - RER</h3>
          <p>
            En este régimen tributario se encuentran las personas con negocio y
            personas jurídicas que obtengan rentas provenientes de actividades
            de comercio y/o industria, y actividades de servicios. Este régimen
            solo lleva dos registros contables (Compras y Ventas), emites todo
            tipo de comprobantes de pago, solo presentas declaraciones mensuales
            y no estás obligado a presentar declaraciones anuales. Además, debes
            considerar que se tienen restricciones en este régimen,
          </p>
          <br />
          <br />
          <ul>
            <li>
              Tus ingresos o compras anuales no deben superar los S/ 525,000
              soles
            </li>
            <li>Tener como máximo 10 trabajadores por turno de trabajo</li>
            <li>
              El valor de los activos fijos no debe superar los S/ 126,000 soles
              (excepto vehículos y predios)
            </li>
            <li>Tampoco puedes realizar actividades no comprendidas</li>
          </ul>
          <br />
          <br />
          <p>
            Al realizar las declaraciones mensuales, se determina el pago de dos
            impuestos: <br />
            <br />
          </p>
          <ul>
            <li>El Impuesto General a las ventas (IGV) del 18%. </li>
            <li>El impuesto a la renta (el 1.5% sobre tus ingresos netos)</li>
          </ul>
          <br />
          <br />
          <p>
            Un requisito para pertenecer de manera permanente a este régimen es
            cumplir con la declaración y pago del periodo de inicio de
            actividades dentro de la fecha de vencimiento, según el Cronograma
            de obligaciones mensuales y así evitar sanciones.
          </p>
          <h3>Régimen MYPE Tributario - RMT</h3>
          <p>
            Es un régimen especialmente creado para las micro y pequeñas
            empresas con el objetivo de promover su crecimiento. El Régimen MYPE
            Tributario (RMT) les exige condiciones más simples para cumplir con
            sus obligaciones tributarias. El RMT es uno de los regímenes
            tributarios para negocio admitidos por la Sunat.
          </p>
          <h4>Ventajas y beneficios</h4>
          <ul>
            <li>Montos a pagar de acuerdo a la ganancia obtenida.</li>
            <li>Tasas reducidas.</li>
            <li>Realizar cualquier tipo de actividad económica.</li>
            <li>Emitir todos los tipos de comprobantes de pago.</li>
            <li>Llevar libros contables en función de tus ingresos.</li>
          </ul>
          <h3>Régimen General</h3>
          <p>
            Está dirigido a las medianas y grandes empresas (personas con
            negocio o personas jurídicas) que generan rentas de tercera
            categoría, también a las asociaciones de cualquier profesión, arte,
            ciencia u oficio y cualquier otra ganancia o ingreso obtenido por
            las personas jurídicas. En este régimen no hay límite de ingresos.
            <br />
            <br />
            En este régimen tributario se debe:
            <br />
            <br />
          </p>
          <ul>
            <li>Elaborar libros contables.</li>
            <li>
              Elaborar el Estado de Situación Financiera y el Estado de
              Resultados, los que forman parte de la Declaración Anual, entre
              otras obligaciones, por lo que se recomienda contar con una
              persona con conocimientos que pueda ayudarte en estas gestiones.
            </li>
          </ul>
          <br />
          <br />
          <p>
            La ventaja de este régimen tributario es que puedes desarrollar tu
            negocio en cualquier actividad y sin límite de ingresos y en caso
            tengas pérdidas económicas en un año, se podrán descontar de las
            utilidades de los años posteriores, pudiendo llegar al caso de no
            pagar Impuesto a la Renta Anual.
            <br />
            <br />
            En este régimen se realizan declaraciones mensuales, en el cual se
            determina el pago de dos impuestos:
          </p>
          <br />
          <br />
          <ul>
            <li>El Impuesto General a las ventas (IGV) del 18%. </li>
            <li>
              El impuesto a la renta (el que resulte mayor de aplicar el
              coeficiente o 1.5% sobre los ingresos netos mensuales).
            </li>
          </ul>
          <br />
          <br />
          <p>
            También te permite descontar los gastos relacionados a tu negocio de
            tus ingresos, de esta manera pagas el impuesto sobre la utilidad
            final del año, por lo que debes presentar una Declaración jurada
            anual aplicando la tasa del 29.5%, en la cual podrás descontar los
            pagos que realizaste de manera mensual del impuesto a la renta.
          </p> */}
        </div>
        <footer>
          <div className="container"></div>
        </footer>
      </div>
    </div>
  );
};

export default Tributos;
