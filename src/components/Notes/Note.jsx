import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Cards from './Cards'

const Note = () => {
    const [data,setData]=useState([])

    useEffect(() => {
        getData();
    },[])

    const getData = () => {
        fetch("https://ashok-notes.herokuapp.com/notes/get").then((d) => d.json()).then((res) => {
            setData(res)
        })
    }
    return (
        <>
            <div className='container'>
                <div className='my-5'>
                    <div className="row">
                        {data.map((e) => {
                            return (
                                <Cards
                                    title={e.title.length > 15 ? e.title.slice(0, 15) + "..." : e.title}
                                    notes={e.notes.length>100 ? e.notes.slice(0, 100) + "...": e.notes} />
                            )
                        })}
                    </div>
                </div>
                
         
                
            </div>
        </>
    );
}

export default Note
