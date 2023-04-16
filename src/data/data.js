/* Páginas de Main */
import About from "../pages/main/About";
import Tools from "../pages/main/Tools";
import Projects from "../pages/main/Projects";
import Certificate from "../pages/main/Certificate";

/* Iconos */
import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPhotoshop,
  DiSass,
} from "react-icons/di";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
} from "react-icons/tb";
import { SiCanva, SiExpress, SiMui } from "react-icons/si";

/* Imágenes de las instituciones */
import imgUniBelgrano from "../assets/images/img-uni-belgrano.jpg";
import imgAcaNumen from "../assets/images/img-academia-numen.jpg";


/* Imágenes de los certificados */
import cerProWeb from "../assets/images/academia-certificado.jpg";
import imgTitulo from "../assets/images/titulo-analista.jpg";

/* Imágenes proyectos */
import img3 from "../assets/images/img3.jpg";

/* ------------------------------------ */
/* Datos */
export const dataTabs = [
  { id: 1, title: "Historia", content: <About /> },
  { id: 2, title: "Herramientas", content: <Tools /> },
  { id: 3, title: "Proyectos", content: <Projects /> },
  { id: 4, title: "Certificaciones", content: <Certificate /> },
];

export const tools = [
  { name: "HTML", icon: <TbBrandHtml5 /> },
  { name: "CSS", icon: <TbBrandCss3 /> },
  { name: "JavaScript", icon: <TbBrandJavascript /> },
  { name: "React", icon: <DiReact /> },
  { name: "Node.js", icon: <DiNodejsSmall /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Photoshop", icon: <DiPhotoshop /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Sass", icon: <DiSass /> },
  { name: "Bootstrap", icon: <TbBrandBootstrap /> },
  { name: "Material UI", icon: <SiMui /> },
];

export const linksNavbar = [
  {
    id: 1,
    to: "/#home",
    texto: "Inicio",
  },
  {
    id: 2,
    to: "/#about",
    texto: "Sobre mí",
  },
  {
    id: 3,
    to: "/#contact",
    texto: "Contacto",
  },
];

export const projects = [
  {
    id: 1,
    title: "Rebeer",
    tech: "React, Sass",
    link: "https://fucking-beer.vercel.app/",
    backgroundImage: img3,
  },
];

export const certificates = [
  {
    id: 1,
    imgInstitution: imgAcaNumen,
    institution: "Academia Numen",
    title: "Desarrollador Web Full Stack",
    imgTitle: cerProWeb,
  },
  {
    id: 2,
    imgInstitution: imgUniBelgrano,
    institution: "Universidad de Belgrano",
    title: "Analista Universitario en Gestión de Capital Humano",
    imgTitle: imgTitulo,
  },
];
