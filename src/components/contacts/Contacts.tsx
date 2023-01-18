import React, { useRef, useState } from "react";
import * as S from "./Contacts.styles";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";
import Input from "../input/Input";

import * as yup from "yup";

type initialValues = {
  email: string;
  text: string;
};

const Contacts = () => {
  const [response, setResponse] = useState<string | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const validationSchema = yup.object({
    email: yup.string().email("Must be valid email").required("required field"),
    text: yup.string().max(150, "exceeded 150 characters length").required("required field"),
  });

  const initialValues: initialValues = {
    email: "",
    text: "",
  };

  const sendEmail = async () => {
    setResponse(null);
    const currentForm = form.current;
    if (currentForm == null) return;
    try {
      const res = await emailjs.sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_TEMPLATE}`,
        currentForm,
        `${process.env.REACT_APP_EMAIL_KEY}`
      );
      const data = await res;
      if (data.text === "OK") {
        setResponse("Email successfully sent!");
        setTimeout(() => {
          setResponse(null);
        }, 5000);
      } else {
        setResponse("Oops something went wrong");
        setTimeout(() => {
          setResponse(null);
        }, 5000);
      }
    } catch (err) {
      setResponse("Oops something went wrong");
    }
  };

  return (
    <>
      <S.StyledTitle title="have a question?" subtitle="Contact me!" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(val, { resetForm }) => {
          sendEmail();
          resetForm();
        }}
      >
        {(formik) => {
          const { errors, values, touched, handleChange, handleSubmit, handleBlur } = formik;
          return (
            <>
              <S.Form ref={form} onSubmit={handleSubmit}>
                <S.Notification response={response === null ? false : true}>{response}</S.Notification>
                <Input
                  type="email"
                  value={values.email}
                  error={errors.email}
                  name="email"
                  placeholder="example@example.io"
                  label="Email"
                  touched={touched.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Input
                  value={values.text.toString().slice(0, 150)}
                  name="text"
                  error={errors.text}
                  placeholder="Email"
                  label="Message"
                  touched={touched.text}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <S.SubmitBtn type="submit" text="submit" />
              </S.Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Contacts;
