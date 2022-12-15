import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const imgURL = "https://image.tmdb.org/t/p/w342";

const SingleMovie = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=680e609baa2671cc67cf4d6797aaff0b&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, []);

  const addToFavorites = () => {
    axios
      .post("/api/users/favorites", {
        title: movie.title,
        image: imgURL + movie.poster_path,
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
            src={movie.poster_path ? imgURL + movie.poster_path : ""}
          />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
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

export default SingleMovie;
