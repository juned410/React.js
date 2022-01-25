import React from "react";
import { Formik, Form } from "formik";
import { Textfield } from "./Textfield";
import * as Yup from "yup";

export const Singup = () => {
  // const SaveValues = (e) => {
  //  sessionStorage.setItem(e.formik, e.key);
  //   e.preventDefault();
  //   e.stopPropogation();
  // };
  const validate = Yup.object({
    firstName: Yup.string()
      .max(10, "Must be 10 character or less *")
      .required("first name is required *"),
    middleName: Yup.string().max(10, "Must be 10 character or less *"),
    lastName: Yup.string()
      .max(10, "Must be 10 character or less *")
      .required("last name is required *"),
    emailId: Yup.string()
      .email("Email is invalid *")
      .required("Email is required *"),
    dateOfBirth: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required"),
    gender: Yup.string().required("Gender is required"),
    adhaarNo: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Adhaar No is required *"),
    mobileNo: Yup.string()
      .max(15, "Must be 10 character or less")
      .required("Mobile No is required *"),
    address: Yup.string()
      .max(50, "Must be 50 character or less")
      .required("required *"),
    country: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required *"),
    state: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required *"),
    city: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("required *"),
    pincode: Yup.string()
      .max(8, "Must be 8 character or less")
      .required("required *"),
    password: Yup.string()
      .min(6, "Pasword Must be at Least 6 character *")
      .required("Password is required *"),
    cnfmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match *")
      .required("Confirm Password is required *"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        adhaarNo: "",
        mobileNo: "",
        emailId: "",
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        password: "",
        cnfmpassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Textfield label="First Name" name="firstName" type="text" />
          <Textfield label="Middle Name" name="middleName" type="text" />
          <Textfield label="Last Name" name="lastName" type="text" />
          <Textfield label="Email " name="emailId" type="email" />
          <Textfield label="Mobile No" name="mobileNo" type="number" />
          <Textfield label="Adhaar No " name="adhaarNo" type="number" />
          <Textfield
            label="DOB (Date Of Birth)"
            name="dateOfBirth"
            type="date"
          />
          <div>
            <Textfield label="Gender" name="gender" />
            <select
              className="dropdown"
              name="gender"
              onChange={formik.handleChange}
            >
              <option>---Select---</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <Textfield label="Country" name="country" type="text" />
          <Textfield label="State" name="state" type="text" />
          <Textfield label="City" name="city" type="text" />
          <Textfield label="PINCODE" name="pincode" type="number" />
          <Textfield label="Address" name="address" type="text" />
          <Textfield label="Password" name="password" type="password" />
          <Textfield
            label="Confirm Password"
            name="cnfmpassword"
            type="password"
          />
          <button
            className="btn btn-dark mt-3 "
            type="submit"
            
          >
            Submit
          </button>
          &nbsp; &nbsp;
          <button className="btn btn-danger mt-3" type="reset">
            Close
          </button>
        </Form>
      )}
    </Formik>
  );
};
