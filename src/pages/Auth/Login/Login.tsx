import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, TextField } from "@mui/material";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <section className="page-container">
      <div className="left-content">
        <h3 className="header-text">Hi, Welcome back</h3>
        <img
          className="image"
          alt="auth"
          src="https://minimals.cc/assets/illustrations/illustration_dashboard.png"
        ></img>
      </div>
      <div className="right-content">
        <div className="title">
          <h4>Sign in to swadhyaya</h4>
        </div>
        <div>
          <Alert variant="filled" severity="success" className="filled-alert">
            <strong>demo@clasmentor.cc</strong>
          </Alert>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="input-field"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            type="password"
            label="Password"
            variant="outlined"
            className="input-field"
          />
        </div>
        <Button
          variant="contained"
          className="login-button"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </Button>
      </div>
    </section>
  );
};
