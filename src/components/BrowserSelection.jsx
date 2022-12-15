import React from "react";
import { Link } from "react-router-dom";

const BrowserSelection = () => {
  return (
    <>
      <Link className="noDecoration" to="/movie">
        <h1 >Busca Peliculas</h1>
      </Link>
      <Link className="noDecoration" to="/serie"><h1>Busca Series</h1></Link>
    </>
  );
};

export default BrowserSelection;
