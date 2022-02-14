import React from "react";
import { useState } from "react";

const Input = () => {
  const [formData, setFormData] = useState({
    title: "",
    notes: "",
    tag: "",
  });

  function handelChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const postData = () => {
    const data = formData;
    fetch("https://ashok-notes.herokuapp.com/notes/addnote", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  return (
    <div className="my-5">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
          postData();
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
              onChange={handelChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="Start Writing Here..."
            ></textarea>
          </div>
          <div className="mb-3 p-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Tage
            </label>
            <input
              name="tag"
              onChange={handelChange}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Tage:"
            />
          </div>
          <div className="p-3">
            <button className="btn btn-primary ">Save Notes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
