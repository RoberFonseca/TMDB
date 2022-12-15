import React from "react";
import "bootstrap/dist/css//bootstrap.min.css";
import { Button, Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../store/states/user";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";


const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .post("/api/users/logout")
      .then((res) => {
        dispatch(deleteUser(res.data));
        return res.data;
      })
      .then(() => navigate("/"));
  };
  return (
    <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg navbar-light bg-light">
      <Container>
          <Navbar.Brand>
            <img
              src="https://i.pinimg.com/236x/23/b4/f7/23b4f7afd5755af7bb64cc4ac580996a.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="guts"
            />
          </Navbar.Brand>
        </Container>
      <Link className="navbar-brand" to="/">
        Bienvenidos a CUEVANA2777
      </Link>
      {user.email ? (
        <>
          <Link to="/favorites">
            <Button className="navbar-brand">
              favorites
            </Button>
          </Link>
          <Link to="/">
            <Button onClick={logoutHandler} className="navbar-brand">
              logout
            </Button>
          </Link>
          <Link to="/users">
          <Button className="navbar-brand">
              Users
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/register">
            <Button className="navbar-brand" href="/register">
              register
            </Button>
          </Link>
          <Link to="/login">
            <Button className="navbar-brand">login</Button>
          </Link>
        </>
      )}
    </Navbar>
  );
};

export default Nav;
