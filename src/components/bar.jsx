import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './bar.css'
import App from '../App';
import About from './about/about';
import NotFound from './notFound/notFound';

function NavBar() {
    return (
        <Router>
        <div className='bar'>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            </div>

            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route exact path="/" element={<App/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}
export default NavBar;