import React, { useEffect } from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../features/slices/userLogInSlice";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const userSignin = useSelector((state) => state.logIn);
  const { userInfo, isLoading, error, isLoggedIn } = userSignin;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Must be a valid email")
        .required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;

      dispatch(logIn({ email, password }));
    },
  });
  useEffect(() => {
   
    if (userInfo && isLoggedIn) {
      navigate(`/user-dashboard/${userInfo._id}`);
    }
    if(isLoggedIn && userInfo.isAdmin) {
      navigate("/adminPanel")
    }
  

  }, [isLoggedIn, navigate, redirect, userInfo]);
 
  return (
    
      <div className="loginBack">
        <div>
          {isLoading && (
            <Box sx={{ display: "flex", alignItem: "center" }}>
              <CircularProgress />
            </Box>
          )}
        

        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <h1>Sign In</h1>
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
            <label />
            <button type="submit" className="primary">
              Login
            </button>
          </div>
          <div>
            {" "}
            {error && (
              <Alert severity="error">
                <AlertTitle>wrong email or Password</AlertTitle>
                {error}
              </Alert>
            )}
            <label />
            <div>
              <Link to={`/register?redirect=${redirect}`}>
                <h3>Create an account </h3>
              </Link>
              <Link to="/resetpasslink">
                <h3>Forget Password</h3>
              </Link>
            </div>
          </div>
        </form>
        </div>
      </div>
    
  );
};

export default LoginScreen;
