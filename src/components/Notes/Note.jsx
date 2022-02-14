import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Loading from "../Spinner/Loading";
import Cards from "./Cards";

const Note = () => {
  const [data, setData] = useState([]);
  const [delet, setDelete] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
    setLoading(true);
    fetch(`https://ashok-notes.herokuapp.com/notes/get?_page=${page}&&_limit=9`)
      .then((d) => d.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      });
  };
    getData();
  }, [delet, page]);

  function pageNo(n) {
    setPage(page + n);
  }

  

  const deleteNote = (id) => {
    setLoading(true);
    axios
      .delete(`https://ashok-notes.herokuapp.com/notes/delete/${id}`)
      .then(() => {
        setDelete("Delete Success");
        setLoading(false);
      });
    console.log("delete note");
  };

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        {data.map((e) => {
          return (
            <Cards
              key={e._id}
              id={e._id}
              deleteNote={() => {
                deleteNote(e._id);
              }}
              title={
                e.title.length > 15 ? e.title.slice(0, 15) + "..." : e.title
              }
              notes={
                e.notes.length > 100 ? e.notes.slice(0, 100) + "..." : e.notes
              }
            />
          );
        })}
      </div>
      {loading && (
        <li className="page-item mx-3">
          {" "}
          <Loading />
        </li>
      )}
      <div className="d-flex justify-content-center bg-light ">
        <div className="p-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button
                  onClick={() => {
                    pageNo(-1);
                  }}
                  className={
                    page <= 1 ? "btn btn-primary disabled" : "btn btn-primary"
                  }
                >
                  Previous
                </button>
              </li>
              <li className="page-item mx-3">
                <p className="page-link">{page}</p>
              </li>

              <li className="page-item">
                <button
                  className={
                    data.length < 9
                      ? "btn btn-primary disabled"
                      : "btn btn-primary"
                  }
                  onClick={() => {
                    pageNo(1);
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Note;
