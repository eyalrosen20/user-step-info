import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { stepTwoSchema } from "../config/validationSchemas";

interface StepTwoProps {
  initialAge: string;
  onValidSubmit: (values: { age: string }) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ initialAge, onValidSubmit }) => {
  return (
    <Formik
      initialValues={{ age: initialAge }}
      validationSchema={stepTwoSchema}
      onSubmit={(values, actions) => {
        onValidSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <label>
            Age:
            <Field name="age" type="number" placeholder="Age" />
            <ErrorMessage name="age" component="div" />
          </label>
          <br />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
