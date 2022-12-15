import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const imgURL = "https://image.tmdb.org/t/p/w342";

const SingleSerie = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [serie, setSerie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=680e609baa2671cc67cf4d6797aaff0b&language=en-US`
      )
      .then((res) => setSerie(res.data));
  }, []);

  const addToFavorites = () => {
    axios
      .post("/api/users/favorites", {
        title: serie.name,
        image: imgURL + serie.poster_path,
      })
      .then((res) => {
        return res.data;
      })
      .then(() => alert("favorito agregado"));
  };
  return (
    <>
      <Link to="/">
        <Button>Volver a main</Button>
      </Link>
      <div className="divCenter">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={serie.poster_path ? imgURL + serie.poster_path : ""}
          />
          <Card.Body>
            <Card.Title>{serie.name}</Card.Title>
            <Card.Text>{serie.overview}</Card.Text>
            {user.email ? (
              <Button variant="primary" onClick={addToFavorites}>
                Agregar a favoritos
              </Button>
            ) : null}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleSerie;
