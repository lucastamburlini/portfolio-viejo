import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";

const FormContact = () => {
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
          .required("Debe dejar un mensaje"),
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
          <div>
            <div className="item 1">
              <div>
                <label htmlFor="firstName">Nombre</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />
              </div>
              <div className="item 2">
                <label htmlFor="lastName">Apellido</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>
              <div className="item 3">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>
              <div className="item 4">
                <label htmlFor="phoneNumber">Teléfono</label>
                <Field name="phoneNumber" type="phoneNumber" />
              </div>
              <div className="item 5">
                <label htmlFor="message">Mensaje</label>
                <Field name="message" as="textarea" />
                <ErrorMessage name="message" />
              </div>
            </div>
            <Button>Enviar</Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
export default FormContact;
