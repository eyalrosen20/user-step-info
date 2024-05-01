import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { stepOneSchema } from '../config/validationSchemas';

interface StepOneProps {
  initialFirstName: string;
  initialLastName: string;
  onValidSubmit: (values: { firstName: string, lastName: string }) => void;
}

const StepOne: React.FC<StepOneProps> = ({ initialFirstName, initialLastName, onValidSubmit }) => {
  return (
    <Formik
      initialValues={{ firstName: initialFirstName, lastName: initialLastName }}
      validationSchema={stepOneSchema}
      onSubmit={(values, actions) => {
        onValidSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <label>
            First Name:
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" />
          </label>
          <label>
            Last Name:
            <Field name="lastName" type="text" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" />
          </label>
          <br />
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
