import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../features/slices/userRegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.register);
  const { userInfo, isLoading, error, success } = userRegister;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is required!")
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name"),
      email: Yup.string()
        .email("Must be a valid email")
        .required("This field is required!"),
      password: Yup.string()
        .required("This field is required!")
        .min(8, "Password is to short - must be 8 chars.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      const { name, email, password } = values;
      dispatch(register({ name, email, password }));
      
    },
  });
  return (
    <div className="loginBack">
    <div>
      {success && (
        <div>
         <h1>SUBMIT SUCESSS</h1> 
        </div>
      )}
      <form className="form" onSubmit={formik.handleSubmit}>
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <label htmlFor="name"></label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter name"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirm-Password"></label>
          <input
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          ></input>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div>
          <label />
          <button type="submit" className="primary">
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;