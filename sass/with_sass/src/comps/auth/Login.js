import React, { useState } from "react";

import "./Login.scss";

const INITIAL_DATA = {
  username: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [formError, setFormError] = useState("");

  const dataChanged = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const login = async () => {
    //TODO:
  };

  const reset = () => {
    setFormData({ ...INITIAL_DATA });

    setFormError("");
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="username">Username*</label>
          </div>
          <div className="ff-content">
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={dataChanged}
            />
          </div>
        </div>

        <div className="form-field">
          <div className="ff-label">
            <label htmlFor="password">Password*</label>
          </div>
          <div className="ff-content">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={dataChanged}
            />
          </div>
        </div>

        {formError !== "" && <div style={{ color: "red" }}>{formError}</div>}

        <div className="form-actions">
          <button className="app-button" type="submit" onClick={login}>
            Login
          </button>
          <button className="app-button" type="button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
