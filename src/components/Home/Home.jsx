import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState("")
    const [notes, setNotes] = useState("");

    const postData = () => {
        const data = {
            title: title,
            notes:notes,
        }
        fetch("https://ashok-notes.herokuapp.com/notes/addnote", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type":"application/json",
            }
        })
    }
    return (
        <div className='container'>
            <div className='my-5'>
                <Link to="note">
                    <button onClick={() => {
                }} className="btn btn-primary">see all your notes</button>
                </Link>
                
            </div>
            <div className='my-5 bg-light' >
                <div className="mb-3 p-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Title:" />
                </div>
                <div className=" p-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write Your Notes</label>
                    <textarea onChange={(e) => { setNotes(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
                </div>
                <div className="p-3">
                    <button onClick={() => { postData() }} className="btn btn-primary ">Save Notes</button>
                </div>
            
            </div>
        </div>
    );
}

export default Home
