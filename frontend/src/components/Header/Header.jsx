import React from 'react'
import './Header.css'

const Header = () => {

  const gotonowshowing = () => {
    const section = document.getElementById("nowShowing");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
  }
  return (
    <div className='header'>
        <h2 id='head2'>"Cinema Awaits, Just a Tick Away!"</h2>

        <button id="but" onClick={gotonowshowing}>BOOK NOW</button>
        
        <p id='para'><i>Book your movie moments effortlessly with CineTick! <br />
         Choose your film, pick your seats, and get ready for a seamless cinematic experience. <br />
         Stay updated with us for the latest releases, find the perfect spot, and let the movie magic begin—all in just a few clicks.</i></p>
    </div>
  )
}

export default Header