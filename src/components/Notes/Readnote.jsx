import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loading from "../Spinner/Loading";

const Readnote = () => {
  const noteId = useParams();
  const { id } = noteId;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNote = () => {
    axios
      .get(`https://ashok-notes.herokuapp.com/notes/get/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
    console.log("getNote");
  };

  useEffect(() => {
    console.log("useEffect");
    getNote();
  }, [id]);

  const { notes, title } = data;

  return (
    <div className="container">
      {loading && <Loading />}
      <h1 key={id}>{title}</h1>
      <p>{notes}</p>
      <div>
        <Link to={`/update/${id}`}>
          <button className="btn btn-outline-primary">Update</button>
        </Link>
      </div>
    </div>
  );
};

export default Readnote;
