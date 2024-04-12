

import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
        <div className="navbar">
            <div className="nav-content">
                <div className="logo">
                    <a href='/'>this is logo</a>
                </div>
                <nav>
                    <ul>
                        
                        <li><NavLink to="/"><div className="list-item">Home</div></NavLink></li>
                        <li><NavLink to="/about"><div className="list-item">About</div></NavLink></li>
                        
                        
                        <li><NavLink to="/login"><div className="list-item">Login</div></NavLink></li>
                        
                        
                        <li><NavLink to="/register"><div className="list-item">Register</div></NavLink></li>
{/* 
                        <li><NavLink to="/profile"><div className="list-item">Profile</div></NavLink></li>

*/}
                        
                    </ul>
                </nav>

                

            </div>

        </div>
        
        </>

    )
}

export default Navbar;