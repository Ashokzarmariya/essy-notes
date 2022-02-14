import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UpdateNote = () => {
  const noteId = useParams();
    const { id } = noteId;
    const [update, setUpdate]=useState("")

  const [formData, setFormData] = useState({
    title: "",
    notes: "",
    tags: "",
  });

  const getNote = () => {
    axios
      .get(`https://ashok-notes.herokuapp.com/notes/get/${id}`)
      .then((res) => {
        setFormData(res.data);
      });
  };

  useEffect(() => {
    getNote();
  }, [id]);

  function handelChange(e) {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  }

  function updateNote() {
    axios
      .patch(`https://ashok-notes.herokuapp.com/notes/update/${id}`, formData)
      .then((res) => {
        setFormData(res.data);
      });
  }

  return (
    <div className="container my-5">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
            console.log(formData);
            updateNote();
            setUpdate("updated successfully")
        }}
      >
        <div className="my-5 bg-light">
          <div className="mb-3 p-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handelChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Title:"
            />
          </div>
          <div className=" p-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Write Your Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handelChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="12"
            ></textarea>
          </div>
          <div className="mb-3 p-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Tage
            </label>
            <input
              name="tags"
              value={formData.tags}
              onChange={handelChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Tage:"
                      />
                      
                  </div>
                  
                  <div className="d-flex justify-content-between">
                       <div className="p-3">
                     
                          <button className="btn btn-primary ">Update Note</button>
                      
            
                      </div>
                      <div className="text-success my-3"><p>{update}</p> </div>
                  <div className="p-3">
                      <Link to={`/note/${id}`}>
                          <button className="btn btn-primary ">See Note</button>
                      </Link>
            
          </div>
                  </div>
                 
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;
