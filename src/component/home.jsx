import React from 'react';
import './home.css';
import Slider from './carousel'

const Home = () => {
    return (
        <div className='main'>
            <nav className="navbar">
                <img src="assets/images/logo.svg" alt="" />
                <button className="btn">LOGIN</button>
            </nav>
            <Slider />
        </div>
    )
}

export default Home;