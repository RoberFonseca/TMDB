import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [shows, setShows] = useState([]);
  useEffect(() => {
    axios.get(`/api/favorites/${id}`).then((res) => {
      return setShows(res.data);
    });
  }, []);

  return (
    <>
      <Link to="/users"><Button>Volver</Button></Link>
      <div className="divCenter">
        <h1>Favorites:</h1>
      </div>
      <div className="divCenter">
        <ListGroup>
          {shows.map((show) => {
            return <ListGroup.Item key={show.id}>{show.title}</ListGroup.Item>;
          })}
        </ListGroup>
      </div>
    </>
  );
};

export default SingleUser;
