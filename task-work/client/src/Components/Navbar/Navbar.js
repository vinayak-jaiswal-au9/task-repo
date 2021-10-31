import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../ConstantActions/actionTypes";

const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedtoken = decode(token);
      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
    history.push("/");
    setUser(null);
  };
  console.log(user);

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <Link className="nav-item nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-item nav-link" to="/register">
        Register
      </Link>
    </ul>
  );
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <h4 className="nav-item nav-link mr-2">
        <i className="fa fa-user"></i> {user?.result.name}
      </h4>
      <form className="form-inline">
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={logout}
        >
          Logout
        </button>
      </form>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link to="/" className="navbar-brand">
        Images
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        {!user ? guestLinks : authLinks}
      </div>
    </nav>
  );
};

export default Navbar;
