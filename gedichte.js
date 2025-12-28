import React from 'https://esm.sh/react'
import { Link } from 'https://esm.sh/react-router-dom'
import { Helmet } from 'https://esm.sh/react-helmet'

import './gedichte.css' // Achte auf das .css am Ende

const Gedichte = (props) => {
  return (
    <div className="gedichte-container">
      <Helmet>
        <title>Gedichte - Gil Walter</title>
      </Helmet>
      <header className="home-container2">
          <Link to="/" className="home-navlink1">
            <h1 className="home-text1">Gil Walter </h1>
          </Link>
      </header>
      <div className="gedichte-list">
        {/* Hier deine Gedichte-Links */}
        <span>Deine Gedichte kommen hierhin.</span>
      </div>
    </div>
  )
}

export default Gedichte