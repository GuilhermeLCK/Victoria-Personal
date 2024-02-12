import React from "react";
import { FaCheck } from "react-icons/fa";

import "./Plans.scss";

function Plans() {
  return (
    <div className="container-Plans" id="Planos">
      <h1>
        Conheça nossos <span>Planos</span>
      </h1>
      <span className="span-liner"></span>

      <div className="container-Plans-sections">
        <div className="container-Plans-section">
          <h2>
            R$15<span>/dia</span>
          </h2>

          <p className="trainer-tag">TREINO DE UM DIA</p>

          <p className="trainer-plans">Lorem, ipsum dolor</p>

          <p className="trainer-plans"> Lorem, ipsum dolor</p>

          <p className="trainer-plans off"> Lorem, ipsum dolor</p>

          <p className="trainer-plans off"> Lorem, ipsum dolor</p>
          <p className="trainer-plans off"> Lorem, ipsum dolo</p>
        </div>
        <div className="container-Plans-section updonw">
          <h2>
            R$599<span>/ano</span>
          </h2>
          <p className="trainer-tag">PLANO ANUAL</p>
          <p className="trainer-plans"> Lorem, ipsum dolor</p>{" "}
          <p className="trainer-plans"> Lorem, ipsum dolor</p>{" "}
          <p className="trainer-plans"> Lorem, ipsum dolor</p>{" "}
          <p className="trainer-plans"> Lorem, ipsum dolor</p>{" "}
          <p className="trainer-plans"> Lorem, ipsum dolor</p>
        </div>
        <div className="container-Plans-section">
          <h2>
            R$55<span>/mês</span>
          </h2>

          <p className="trainer-tag">PLANO MENSAL</p>

          <p className="trainer-plans"> Lorem, ipsum dolor</p>

          <p className="trainer-plans"> Lorem, ipsum dolor</p>

          <p className="trainer-plans"> Lorem, ipsum dolor</p>

          <p className="trainer-plans off">Lorem, ipsum dolor</p>
          <p className="trainer-plans off"> Lorem, ipsum dolor</p>
        </div>
      </div>

      <a>ESCOLHER UM PLANO</a>
    </div>
  );
}

export default Plans;
