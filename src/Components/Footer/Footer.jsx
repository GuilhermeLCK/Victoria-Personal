import React from "react";

import "./Footer.scss";

import Face from "../../Img/face.svg";

import Insta from "../../Img/insta.svg";

function Footer() {
  return (
    <div className="container-Footer">
      <div className="section-localizacao">
        <p>Siga-nos nas redes sociais</p>
        <div className="section-localizacao-link">
          <a href="#" target="_blank">
            <img src={Face} alt="Logo" />
          </a>

          <a href="#" target="_blank">
            <img src={Insta} alt="Logo" />
          </a>
        </div>
      </div>
      <h3>&copy; Todos os direitos reservados</h3>
    </div>
  );
}

export default Footer;
