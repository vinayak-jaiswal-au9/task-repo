import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../Actions/auth";
import { useDispatch } from "react-redux";
import { REGISTER, LOGIN } from "../../ConstantActions/actionTypes";

const AuthLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(login(formData, history));
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { email, password } = formData;

  return (
    <div className="container">
      <h3 className="text-center display-4 mt-2">Login Here</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control  form-control-lg"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Get a whole New Experience
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control form-control-lg"
            id="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-check mb-2 mr-sm-2">
          <input
            onClick={() => setShowPassword(!showPassword)}
            className="form-check-input"
            type="checkbox"
            id="inlineFormCheck"
          />
          <label className="form-check-label" htmlFor="inlineFormCheck">
            <span className="text-muted">Show Password</span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <small className="text-muted">
          New ? <Link to="/register">Click Here</Link> for registration
        </small>
      </form>
    </div>
  );
};

export default AuthLogin;
