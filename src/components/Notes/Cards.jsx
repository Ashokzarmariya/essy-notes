import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, notes, id, deleteNote }) => {
  return (
    <div className="card text-center my-3 mx-3" style={{ width: "20rem" }}>
      <div className="card-body d-flex flex-column justify-content-between ">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{notes}</p>
        </div>
        <div>
          <Link
            to={`/note/${id}`}
            className="btn btn-outline-success mt-3 mx-2"
          >
            Read Note
          </Link>
          <button onClick={deleteNote} className="btn btn-outline-danger mt-3">
            Delete Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
