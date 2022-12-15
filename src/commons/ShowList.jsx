import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const ShowList = ({ items }) => {
  return (
    <>
      <ListGroup>
        {items.map((item) => (
          <div key={item.id}>
            {item.title ? (
              <Link to={`/movie/${item.id}`}>
                
                <ListGroup.Item >{item.title}</ListGroup.Item>
              </Link>
            ) : (
              <Link to={`/serie/${item.id}`}>
                
                <ListGroup.Item >{item.name}</ListGroup.Item>
              </Link>
            )}
          </div >
        ))}
      </ListGroup>
    </>
  );
};

export default ShowList;
