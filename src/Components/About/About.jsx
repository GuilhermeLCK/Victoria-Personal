import React from "react";
import "./About.scss";
import Victoria from "../../Img/Victoria.jpg";

function About() {
  return (
    <div className="container-About">
      <div className="content-About">
        <div className="content-About-Inf">
          <h1>
            TÁ DIFÍCIL CONQUISTAR <br />
            <span>O CORPO DOS SEUS SONHOS?</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ullam tenetur voluptate incidunt laborum adipisci dolores mollitia
            iste cumque ut, repellat sint libero explicabo laboriosam totam
            repellendus in animi et! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur ullam tenetur voluptate incidunt
            laborum adipisci dolores mollitia iste cumque ut, repellat sint
            libero explicabo laboriosam totam repellendus in animi et!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ullam tenetur voluptate incidunt laborum adipisci dolores mollitia
            iste cumque ut, repellat sint libero explicabo laboriosam totam
            repellendus in animi et! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consectetur ullam tenetur voluptate incidunt
            laborum adipisci dolores mollitia iste cumque ut, repellat sint
            libero explicabo laboriosam totam repellendus in animi et!
          </p>

          <a href="">QUERO MUDAR DE VIDA!</a>
        </div>

        <div className="content-About-Logo">
          <img src={Victoria} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
