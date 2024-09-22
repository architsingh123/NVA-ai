import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import { TypeAnimation } from "react-type-animation"

function Homepage() {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className='homepage'>
    <img src='/orbital.png' alt='' className='orbital'/>
     <div className='left'>
      <h1>NVA AI</h1>
      <h2>Empowering conversations, transforming possibilities</h2>
      <h3>
      Nav AI can understand, respond, and assist in real-time, making it the ideal companion for businesses, developers, and users alike. Whether it's answering complex queries, generating insights, or providing personalized solutions.
      </h3>
      <Link to="/dashboard">Get Started</Link>
     </div>
     <div className='right'>
     <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.jpg" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.jpg"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/nva.jpg" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
