import React from 'react'
import './Thoughts.css'
import {Link } from "react-router-dom"

const Thoughts = () => {
  return (
    <div className="thought-container">
      <div className="thought-left">
        <div className="ps-box">
          <h2>PS.</h2>
          <p>Not only tech, but I am also interested to talk about Movies, Bollywood Music, Cubing and Life in general! If you are into any of these we are friends already!</p>
        </div>
        <Link to="https://manage.wix.com/dashboard/b43fe636-df16-4386-bc90-117b266ddb7c/blog/6fda3810-2bff-4e1d-8ab3-f54eb5285c87/edit" target='_blank'>
        <div className="ps-box medium">
          <h2>MY BLOGS</h2>
          <p>When bored I spend some time reading and writing Faith, love and trust blogs. If you are into reading blogs, do read some of mine!</p>
        </div>
        </Link>
        
      </div>
      <div className="my-thought">
        <h1>" I believe that creative collaboration between technology and design is the magic that takes experience from good to great "</h1>
      </div>
    </div>
  )
}

export default Thoughts