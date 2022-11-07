import React from 'react'
import './Home.css'
import profilePic from './assets/priyanshu pic guitar.png'

const Home = () => {
   
    return (
        <div className='home'>
        <div className="homeMain">
            <div className="homeName">
               Priyanshu Hariani
            </div>
            <div className="homeImage">
                <div className="imageContainer">
                <img src={profilePic} alt="" />
                </div>
            </div>
            <div className="homeDev">
                I'm Priyanshu Hariani from India ,a 20 year old tech enthusiast. I do content on Development. I really enjoy learning languages and frameworks like React ,as well as work in Frontend💻
            </div>
        </div>
        </div>
    )
}

export default Home
