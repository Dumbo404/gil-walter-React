import React from 'https://esm.sh/react'
import { Link } from 'https://esm.sh/react-router-dom'
import { Helmet } from 'https://esm.sh/react-helmet'

import './kontakt.css' // Achte auf das .css am Ende

const Kontakt = (props) => {
  return (
    <div className="kontakt-container">
      <Helmet>
        <title>Kontakt - Gil Walter</title>
      </Helmet>
      <header className="home-container2">
          <Link to="/" className="home-navlink1">
            <h1 className="home-text1">Gil Walter </h1>
          </Link>
      </header>
      <div className="kontakt-content">
        <span>Hier dein Kontakt-Text...</span>
      </div>
    </div>
  )
}

export default Kontakt