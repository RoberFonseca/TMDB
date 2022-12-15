import React, { useState } from "react";
import "bootstrap/dist/css//bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/states/user";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        dispatch(setUser(res.data));
        return res.data;
      })
      .then(() => navigate("/"));
  };

  return (
    <>
      <Link to="/"><Button>Volver</Button></Link>
      <div className="divCenter">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChangeEmail}
            />
            <Form.Text className="text-muted">Ingresa tu email.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
