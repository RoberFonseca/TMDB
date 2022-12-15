import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShowList from "../commons/ShowList";
import { Button } from "react-bootstrap";
const tmdb = "https://api.themoviedb.org/3/search/movie";
const key = "?api_key=680e609baa2671cc67cf4d6797aaff0b";

const MovieBrowser = () => {
  const [items, setItems] = useState([]);

  const handleToSearch = (e) => {
    axios
      .get(`${tmdb}${key}&query=${e.target.value}`)
      .then((res) => res.data)
      .then((data) => setItems(data.results));
  };

  return (
    <div>
      <Link to="/">
        <Button>Volver</Button>
      </Link>
      <div className="divCenter">
        <form>
          <label>
            <input
              placeholder="Pone el nombre de tu peli..."
              onChange={handleToSearch}
            />
          </label>
        </form>
      </div>
      <div className="divCenter">
        <ShowList items={items} />
      </div>
    </div>
  );
};

export default MovieBrowser;
