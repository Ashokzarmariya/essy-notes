import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand mx-3 btn" to="/">Esy Notes</Link>
                        <Link className='navbar-brand mx-3 btn btn-outline-success' to="/">Home</Link>
                        <Link className='navbar-brand mx-3 btn btn-outline-success' to="/notes">All Notes</Link>
                    
                    </div>
                    <div className='navbar-brand'>
                        <i className="far fa-user-circle faa mx-5 navbar-brand"></i>
                    <i className='mx-3 navbar-brand'>About</i>
                    </div>
                    
                </div>
                
            </nav>
           
        </div>
    );
}

export default Navbar
