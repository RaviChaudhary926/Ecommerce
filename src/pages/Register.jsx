import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import Swal from 'sweetalert2';
const Register = () => {
    const handleSubmit=(e)=>{
         Swal.fire({
                title: "Done",
                icon: "success",
                text: "Data Recieved.",
                draggable: true,
                confirmButtonText: "Ok"
         )}.then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/'

          }
            
        })
    }

  return (
    <Formik initialValues={{fname: '', lname: '', phone: '', email: '', address: '', password: ''}}
    validationSchema={yup.object({
        fname:yup.string()
        .required('First Name is Mandatory')
        .min (3, 'First Name Must be at least three character long')
        .matches(/^[a-zA-Z\ ]+$/, 'First Name must be alphabet only'),

        lname:yup.string()
        .required('Last Name is Mandatory')
        .min (3, 'Last Name Must be at least three character long')
        .matches(/^[a-zA-Z\ ]+$/, 'Last Name must be alphabet only'),

        email:yup.string()
        .required('Last Name is Mandotary')
        .email('Invalid email')

        phone:yup.string()
        .requred('Last Name is Mandotary')

    })}
    >
    
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <div className="col-md-6 col-lg-5">
      <div className="card shadow-lg p-4 rounded-4">
        <h3 className="text-center mb-4">Create Account</h3>
        <Form>
          <div className="mb-3">
            <label for="fullname" className="form-label">Full Name</label>
            <Field type="text" className="form-control" id="fullname"
             placeholder="Enter your full name" required />
             
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <Field type="email" className="form-control" id="email"
             placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label for="phone" className="form-label">Phone Number</label>
            <Field type="tel" className="form-control" id="phn"
             placeholder="Enter your phone" required />
          </div>

          <div className="mb-3">
            <label for="address" className="form-label">Address</label>
            <Field type="adrs" className="form-control" id="adrs"
             placeholder="Enter your Address" required />
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <Field type="password" className="form-control" id="password"
             placeholder="Enter password" required />
          </div>

          <div className="mb-3">
            <label for="confirm-password" className="form-label">Confirm Password</label>
            <Field type="password" className="form-control" id="confirm-password"
             placeholder="Confirm password" required />
          </div>

          
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </Form>

        <p className="text-center mt-3">
          Already have an account? <a href="#">Login here</a>
        </p>
      </div>
    </div>
  </div>
    </>
  )
}

export default Register
