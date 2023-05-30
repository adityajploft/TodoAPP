import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  // password: Yup.string().required("Password is Required"),
  password: Yup.string()
  .required("Please enter a password")
  .min(4, "Password must have at least 4 characters")
  // .matches(/[0-9]/, getCharacterValidationError("digit"))
  // .matches(/[a-z]/, getCharacterValidationError("lowercase"))
  // .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});


