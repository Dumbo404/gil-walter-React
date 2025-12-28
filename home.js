import React from 'https://esm.sh/react'
import { Link } from 'https://esm.sh/react-router-dom'
import { Helmet } from 'https://esm.sh/react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>gil walter</title>
        <meta property="og:title" content="gil walter" />
        <meta property="og:description" content="Texte und Gedichte :) " />
        <link
          rel="canonical"
          href="https://gilwalter.com/"
        />
      </Helmet>
      <div className="home-thq-header-elm">
        <header className="home-container2">
          <Link to="/" className="home-navlink1">
            <h1 className="home-text1">Gil Walter </h1>
          </Link>
        </header>
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <img alt="image" src="./profil-400w.jpg" className="home-image" />
          <span className="home-text2">Oliver Gil Walter Basse </span>
          <span className="home-text3">Autor. </span>
          
          <Link
            to="/gedichte"
            className="home-navlink2 button"
          >
            Gedichte
          </Link>
          
          <Link
            to="/kontakt"
            className="home-navlink3 button"
          >
            Über mich
          </Link>
        </div>
        <div className="home-container5">
          <span className="home-text4">Texte (Auswahl): </span>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/542bdee4-ca81-4f7c-badb-41a849b182cb"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link10"
          >
            Man spielt im Restaurant nicht mit den Bierdeckeln, Kurzprosa: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/542bdee4-ca81-4f7c-badb-41a849b182cb"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link11"
          >
            <span>
              &quot;Man spielt nicht mit den Bierdeckeln!&quot; und ihr Vater
              schlug ihr den zweiten Bierdeckel aus der Hand, noch bevor sie ihn
              an den ersten anlehnen konnte, um einen Turm zu bauen …
            </span>
            <br></br>
          </a>
          {/* ... Restliche Links bleiben gleich ... */}
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/ab2ed58d-4125-417c-9747-22c7475d3bc7"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link22"
          >
            Winter heisst ..., ein Winter-Lexikon: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/ab2ed58d-4125-417c-9747-22c7475d3bc7"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link23"
          >
            Winter heisst ausrutschen. 
          </a>
        </div>
      </div>
      <div className="home-thq-footer-elm">
        <a
          href="mailto:oliver.gwbasse@gmail.com?subject="
          className="home-link24"
        >
          oliver.gwbasse@gmail.com
        </a>
        <span className="home-text7">Zürich</span>
        <a
          href="./Datenschutzerklärung.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link25"
        >
          Datenschutzerklärung 
        </a>
      </div>
    </div>
  )
}

export default Home