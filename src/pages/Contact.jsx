import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import "../styles/contact.scss";

const CustomErrorMessage = ({ children, ...props }) => (
  <div className="error-message" {...props}>
    * {children}
  </div>
);

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Su mensaje fue enviado con éxito.");
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNumber: "",
      }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Campo obligatorio"),
        lastName: yup
          .string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Campo obligatorio"),
        email: yup
          .string()
          .email("Correo electrónico inválido")
          .required("Campo obligatorio"),
        message: yup
          .string()
          .max(15, "Debe dejar un mensaje")
          .required("Debes dejar un mensaje"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 0);
      }}
    >
      <div id="contact">
        <Form onSubmit={sendEmail} ref={form}>
          <h2 className="container">Contacto</h2>
          <div className="container grid">
            <div className="item nombre">
              <label htmlFor="firstName">Nombre</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component={CustomErrorMessage} />
            </div>
            <div className="item apellido">
              <label htmlFor="lastName">Apellido</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component={CustomErrorMessage} />
            </div>
            <div className="item email">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component={CustomErrorMessage} />
            </div>
            <div className="item telefono">
              <label htmlFor="phoneNumber">Teléfono</label>
              <Field name="phoneNumber" type="phoneNumber" />
            </div>
            <div className="item mensaje">
              <label htmlFor="message">Mensaje</label>
              <Field name="message" as="textarea" />
              <ErrorMessage name="message" component={CustomErrorMessage} />
            </div>
            <div>
              <Button>Enviar</Button>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
export default Contact;
