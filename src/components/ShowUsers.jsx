import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((users) => setUsers(users));
  }, []);

  return (
    <>
      <Link to="/"><Button>Volver</Button></Link>
      <div className="divCenter"><h1>Users:</h1></div>
      <div className="divCenter">
        
        <ListGroup>
          {users.map((user) => (
            <Link key={user.id} to={`/users/${user.id}`}>
              <ListGroup.Item>{user.name}</ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>
    </>
  );
};

export default ShowUsers;
