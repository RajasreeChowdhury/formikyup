import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './App.css';

const SignupSchema = Yup.object().shape({
  email : Yup.string()
  .email('Email is invalid')
  .required('Email is missing'),
password: Yup.string()
.min(8,'Password too short, it should be atleast 8 characters in length')
.matches( /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Password too weak, Must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character'
        )
.required('Password is missing'),
confirmPassword: Yup.string()
.oneOf([Yup.ref('password'), null], "Passwords dont match")
.required('Confirm Password is missing'),
});
const FormInput = ({label,name,type,errors,touched}) => (
  <div>
    <label>{label}</label>
    <Field name={name} type={type}/>
    {errors[name] && touched[name] && (
      <span className="form-error">{errors[name]}</span>
    )}
  </div>
);
function App() 
{
  return(
    <div className="App">
      <h1> Sign Up </h1>
      <div className="card">
        <Formik initialValues={{
          email:'', 
          password:'',
          confirmPassword:'',
        }
        }
        validationSchema={SignupSchema}
        onSubmit={(values,{resetForm}) =>{
          alert('Form submitted successfully');
          resetForm();
        }}
        
        >
          {({ errors, touched }) => (
            <Form>
              <FormInput label="Enter your Email" name="email" type="text" errors={errors} touched={touched} />
              <FormInput label="Enter your Password" name="password" type="password" errors={errors} touched={touched} />
              <FormInput label="Confirm Password" name="confirmPassword" type="password" errors={errors} touched={touched} />
              <input type="submit" />
            </Form>
          )}
          </Formik>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          </div>
  );
}
export default App;