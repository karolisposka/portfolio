import React from "react";
import * as S from "./Contacts.styles";
import { Formik } from "formik";
import Input from "../input/Input";

import * as yup from "yup";

type initialValues = {
  email: string;
  text: string;
};

const Contacts = () => {
  const validationSchema = yup.object({
    email: yup.string().email("Must be valid email").required("required field"),
    text: yup.string().max(150, "exceeded 150 characters length").required("required field"),
  });

  const initialValues: initialValues = {
    email: "",
    text: "",
  };
  return (
    <>
      <S.StyledTitle title="have a question?" subtitle="Contact me!" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {(formik) => {
          const { errors, values, touched, handleChange, handleSubmit, handleBlur } = formik;
          return (
            <>
              <S.Form onSubmit={handleSubmit}>
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
