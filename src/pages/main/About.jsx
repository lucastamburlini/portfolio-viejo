import React from "react";
import "../../styles/about.scss";
import Button from "../../components/Button";

const About = () => {
  return (
    <section id="about">
      <div className="about-text">
        <h1>¡Hola!</h1>
        <p>
          {" "}
          Soy Lucas Tamburlini, un apasionado de la tecnología y la
          programación. Nací el 3 de junio de 1991 en{" "}
          <a
            href="https://goo.gl/maps/EFRJAZAV2rjxeQNJ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Concepción del Uruguay, Entre Ríos, Argentina
          </a>
          , y me gradué en la{" "}
          <a
            href="https://www.ub.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidad de Belgrano
          </a>{" "}
          de Analista Universitario en Gestión de Capital Humano en 2022.
        </p>{" "}
        <br />
        <p>
          Después de terminar la carrera, descubrí mi verdadera vocación como
          programador y me recibí de Programador Web Full Stack en{" "}
          <a
            href="https://ar.academianumen.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Academia Numen
          </a>
          , donde adquirí las habilidades necesarias para trabajar en el mundo
          de la tecnología. Por otro lado, también me especialicé en búsqueda y
          selección de talentos en la{" "}
          <a
            href="https://sceu.frba.utn.edu.ar/e-learning/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidad Tecnológica Nacional
          </a>{" "}
          de Buenos Aires y como Recruiter IT en Staffy.{" "}
        </p>
        <br />
        <p>
          Actualmente, trabajo en el área de Recursos Humanos de{" "}
          <a
            href="https://www.lppietroboni.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lemiro Pablo Pietroboni
          </a>{" "}
          , pero estoy en busca de nuevas oportunidades en el mundo IT.{" "}
        </p>{" "}
        <br />{" "}
        <p>
          Si necesitas conocer más detalles sobre mi experiencia laboral, no
          dudes en descargar y revisar mi curriculum.
        </p>
      </div>
      <div>
        <Button
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/uc?export=download&id=1K1C4cHo74w5pgQogRuomsSLBjTvTq6rt")
          }
        >
          Descarga mi CV
        </Button>
      </div>
    </section>
  );
};

export default About;
