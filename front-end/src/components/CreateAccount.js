import React from 'react'

const CreateAccount = () => {
  return (
    <form className="form">
          <div>
            <h1>Apply for an account</h1>
          </div>
          <div>
            <input
              name="accountName"
              type="text"
              id="accountName"
              placeholder="Enter Account Name"
              // onChange={formik.handleChange}
              // value={formik.values.accountName}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              name="accountBalance"
              type="text"
              id="accountBalance"
              placeholder="Enter Intial Balance"
              // onChange={formik.handleChange}
              // value={formik.values.accountName}
            ></input>
          </div>
          <div>
            <label htmlFor="accountType"></label>
            <select>
              <option value="checking">
                Checking
              </option>
              <option value="saving">
                Saving
              </option>
            </select>
            
          </div>
          <div>
            <label></label>
            <button>Apply</button>
          </div>
        </form>
  )
}

export default CreateAccount;

