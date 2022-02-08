import React from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div>
                        <Link className="navbar-brand" to="/">Free Online Notepade</Link>
                        <Link className='navbar-brand mx-3' to="/">Home</Link>
                    
                    
                    </div>
                    <div className='navbar-brand'>
                        <i className="far fa-user-circle faa mx-5 navbar-brand"></i>
                    <i className='mx-3 navbar-brand'>Featur</i>
                    </div>
                    
                </div>
                
            </nav>
           
        </div>
    );
}

export default Navbar
