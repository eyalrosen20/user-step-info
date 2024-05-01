import * as Yup from 'yup';

export const stepOneSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
});

export const stepTwoSchema = Yup.object({
  age: Yup.number().required('Age is required').positive('Age must be positive').integer('Age must be an integer'),
});