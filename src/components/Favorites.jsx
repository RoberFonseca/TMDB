import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsTrash2Fill } from "react-icons/bs";
import { Button, ListGroup } from "react-bootstrap";

const Favorites = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("/api/favorites").then((res) => {
      return setShows(res.data);
    });
  }, []);
  const deleteFavorite = (id) => {
    axios
      .delete(`/api/favorites/${id}`)
      .then((result) => result.data)
      .then((fav) => setShows(shows.filter((show) => show.title !== fav.title)))
      .then(() => alert("favorito eliminado"));
  };
  return (
    <>
      <Link to="/"><Button>Volver</Button></Link>
      <div className="divCenter">
        <div>
          <ListGroup>
            {shows.map((show) => {
              return (
                <ListGroup.Item key={show.id}>
                  <button onClick={() => deleteFavorite(show.id)}>
                    <BsTrash2Fill />
                  </button>
                  {show.title}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </>
  );
};

export default Favorites;
