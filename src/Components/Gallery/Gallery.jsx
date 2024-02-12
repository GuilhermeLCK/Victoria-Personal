import { useState, React, useEffect } from "react";
import "./Gallery.scss";

import Resultado1 from "../../Img/AntesEdepois.jpg";
import Resultado2 from "../../Img/AntesEdepois2.jpg";

function Gallery() {
  const imgList = [Resultado1, Resultado2, Resultado1, Resultado2];

  return (
    <div className="Container-Gallery">
      <h1>
        Veja algumas <span>Transformaçães</span>
      </h1>
      <div className="Content-Gallery">
        {imgList.map((imageUrl, index) => (
          <img
            className="Gallery-Img"
            key={index}
            src={imageUrl}
            alt={`Imagem ${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
