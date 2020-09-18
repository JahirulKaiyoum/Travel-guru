import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-2 logo'>
                    <img src={logo} alt="" className='img-fluid' />
                </div>
                <div className='col-md-10 menu'>
                    <nav>
                        <ul>
                            <li>
                                <input type="text" className="srch-box"></input>
                            </li>
                           
                            <li>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li>
                                <Link to='/destination'>Destination</Link>
                            </li>
                            
                            <li>
                                <Link to='/login'><Button>Login</Button></Link>
                            </li>
                             
                        </ul>
                    </nav>
                </div>
            </div>
            
        </div>
    );
};

export default Header;