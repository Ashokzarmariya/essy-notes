import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({title,notes}) => {
    return (
        
        <div className="col-sm-3 my-2">
            <div className="card">
                <div className="card-body">
                    <Link to="/"><h3 className="card-title"> {title}</h3> </Link>
                    <p className="card-text">{notes}</p>
                </div>
            </div>
        </div>
        
        
    );
}

export default Cards
