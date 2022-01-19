import React from 'react'
import '../App.css'
import './MainSection.css'

function MainSection() {
  return (
    <div className='main-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      {/* <video src='/videos/video-3.mp4' autoPlay loop muted /> */}
      <h1>ENSURING THE HIGHEST QUALITY</h1>
      <p>
        Wholesale suppliers to the catering industry, restaurants <br></br>and
        specialist supermarkets.
      </p>
    </div>
  )
}

export default MainSection
