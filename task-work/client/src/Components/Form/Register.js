import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Actions/auth";
const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [formDataR, setFormDataR] = useState({
    name: "",
    email: "",
    password: "",
    passwordC: "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (formDataR.password !== formDataR.passwordC) {
      return alert("Password Do Not Match");
    }
    console.log(formDataR);
    dispatch(register(formDataR, history));
  };

  const onChangeHandle = (e) => {
    setFormDataR({ ...formDataR, [e.target.name]: e.target.value });
  };
  const { name, email, password, passwordC } = formDataR;
  return (
    <div className="container">
      <h3 className="text-center display-4 mt-2">Register Here</h3>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            className="form-control  form-control-lg"
            id="userName"
            aria-describedby="userHelp"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={onChangeHandle}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control  form-control-lg"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChangeHandle}
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
            onChange={onChangeHandle}
          />
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
        </div>

        <div className="form-group">
          <label htmlFor="passwordC">Confirm Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="passwordC"
            name="passwordC"
            value={passwordC}
            onChange={onChangeHandle}
            placeholder="Enter Password Again"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br />
        <small className="text-muted">
          Already Registered? <Link to="/login">Click Here</Link> to Log in!!
        </small>
      </form>
    </div>
  );
};

export default Register;
