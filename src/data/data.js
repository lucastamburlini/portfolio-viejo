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
import imgPMI from "../assets/images/pmi.jpg";
import imgLinkedin from "../assets/images/linkedin.jpg";
import sti from "../assets/images/sti.png";

/* Imágenes de los certificados */
import cerProWeb from "../assets/images/academia-certificado.jpg";
import imgTitulo from "../assets/images/titulo-analista.jpg";
import imgScrum from "../assets/images/pmi-certificado.png";
import imgGH from "../assets/images/github.png";
import imgSti from "../assets/images/starters.jpg";

/* Imágenes proyectos */
import rebeer from "../assets/images/rebeer.jpg";
import taskManager from "../assets/images/task-manager.jpg";

/* ------------------------------------ */
/* Datos */
export const dataTabs = [
  { id: 1, title: "Historia", content: <About /> },
  { id: 2, title: "Herramientas", content: <Tools /> },
  { id: 3, title: "Proyectos", content: <Projects /> },
  { id: 4, title: "Certificaciones", content: <Certificate /> },
];

export const tools = [
  {
    category: "Front End",
    items: [
      { name: "HTML", icon: <TbBrandHtml5 /> },
      { name: "CSS", icon: <TbBrandCss3 /> },
      { name: "JavaScript", icon: <TbBrandJavascript /> },
      { name: "React", icon: <DiReact /> },
      { name: "Sass", icon: <DiSass /> },
      { name: "Bootstrap", icon: <TbBrandBootstrap /> },
      { name: "Material UI", icon: <SiMui /> },
    ],
  },
  {
    category: "Back End",
    items: [
      { name: "Node.js", icon: <DiNodejsSmall /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <DiMongodb /> },
    ],
  },
  {
    category: "Diseño",
    items: [
      { name: "Photoshop", icon: <DiPhotoshop /> },
      { name: "Canva", icon: <SiCanva /> },
    ],
  },
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
    backgroundImage: `url(${rebeer})`,
  },
  {
    id: 2,
    title: "Task Manager",
    tech: "Java Script, CSS, HTML",
    link: "https://task-manager-one-ochre.vercel.app/",
    backgroundImage: `url(${taskManager})`,
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
  {
    id: 3,
    imgInstitution: sti,
    institution: "Sonia Tobarda´s Institute",
    title: "Inglés - Nivel Starter",
    imgTitle: imgSti,
  },
  {
    id: 4,
    imgInstitution: imgLinkedin,
    institution: "LinkedIn",
    title: "GitHub para Programadores",
    imgTitle: imgGH,
  },
  {
    id: 5,
    imgInstitution: imgPMI,
    institution: "Project Management Institute",
    title: "Aprende SCRUM",
    imgTitle: imgScrum,
  },
];

export const themes = [
  {
    name: "Light",
    values: {
      "--color-bg": "#ffffff",
      "--color-bg-offset": "#dbdbe2",
      "--color-text": "#373a3c",
      "--color-text-offset": "#ffffff",
      "--color-primary": "#0EA293",
    },
  },
  {
    name: "Dark",
    values: {
      "--color-bg": "#000000",
      "--color-bg-offset": "#303133",
      "--color-text": "#ffffff",
      "--color-text-offset": "#a9a9a9",
      "--color-primary": "#3385ff",
    },
  },
  {
    name: "Blue",
    values: {
      "--color-bg": "#112D4E",
      "--color-bg-offset": "#3F72AF",
      "--color-text": "#F9F7F7",
      "--color-text-offset": "#DBE2EF",
      "--color-primary": "#FFEA20",
    },
  },
  {
    name: "Green",
    values: {
      "--color-bg": "#41644A",
      "--color-bg-offset": "#263A29",
      "--color-text": "#FFFBF5",
      "--color-text-offset": "#FFFBF6",
      "--color-primary": "#E86A33",
    },
  },
  {
    name: "Food",
    values: {
      "--color-bg": "#FFF5E4",
      "--color-bg-offset": "#DEBA9D",
      "--color-text": "#373a3c",
      "--color-text-offset": "#F5E8C7",
      "--color-primary": "#DE1B4A",
    },
  },
  {
    name: "Halloween",
    values: {
      "--color-bg": "#FFA559",
      "--color-bg-offset": "#FF6000",
      "--color-text": "#000000",
      "--color-text-offset": "#D8D8D8",
      "--color-primary": "#FBF7F0",
    },
  },
];
