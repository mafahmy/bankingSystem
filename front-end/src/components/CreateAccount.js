import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { createAccount } from "../features/slices/userCreateAccountSlice";

const CreateAccount = () => {
  const { id: userId } = useParams();
  const dispatch = useDispatch();
  console.log(userId)
  const error = {
    color: "white",
    fontWeight: "bold",
  };
  const formik = useFormik({
    initialValues: {
      accountName: "",
      accountBalance: "",
      accountType: "checking",
    },
    validationSchema: Yup.object().shape({
      accountName: Yup.string()
        .required("This field is required!")
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name"),
      accountBalance: Yup.number()
        .typeError("You must enter a number")
        .required("This Field is required"),
    }),
    onSubmit: (values) => {
      const { accountName, accountBalance, accountType } = values;
      console.log(values);
      dispatch(createAccount({userId, accountName, accountType, accountBalance}));
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <div>
        <h1>Apply for an account</h1>
      </div>
      <div>
        <label>Account Name</label>
        <input
          name="accountName"
          type="text"
          id="accountName"
          placeholder="Enter Account Name"
          onChange={formik.handleChange}
          value={formik.values.accountName}
        ></input>
        {formik.touched.accountName && formik.errors.accountName ? (
          <div style={error}>{formik.errors.accountName}</div>
        ) : null}
      </div>
      <div>
        <label>Initial Balance</label>
        <input
          name="accountBalance"
          type="text"
          id="accountBalance"
          placeholder="Enter Intial Balance"
          onChange={formik.handleChange}
          value={formik.values.accountBalance}
        ></input>
        {formik.touched.accountBalance && formik.errors.accountBalance ? (
          <div style={error}>{formik.errors.accountBalance}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="accountType">Account Type</label>
        <select
          name="accountType"
          onChange={formik.handleChange}
          value={formik.values.accountType}
        >
          <option value="checking">Checking</option>
          <option value="saving">Saving</option>
        </select>
      </div>
      <div>
        <label></label>
        <button type="submit">Apply</button>
      </div>
    </form>
  );
};

export default CreateAccount;
