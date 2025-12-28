import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './gedichte.css'

const Gedichte = (props) => {
  return (
    <div className="gedichte-container1">
      <Helmet>
        <title>Gedichte - gil walter</title>
        <meta property="og:title" content="Gedichte - gil walter" />
        <meta property="og:description" content="Texte und Gedichte :) " />
        <link
          rel="canonical"
          href="https://trim-tepid-oyster-w9bx29.teleporthq.app/gedichte"
        />
      </Helmet>
      <div className="gedichte-thq-header-elm">
        <header className="gedichte-container2">
          <Link to="/" className="gedichte-navlink">
            <h1 className="gedichte-text1">Gil Walter </h1>
          </Link>
        </header>
      </div>
      <div className="gedichte-container3">
        <div className="gedichte-container4">
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/e0d35ab6-81ce-4825-81bc-2205984ac654"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="image"
              src="/sharedscreenshot-600h.jpg"
              className="gedichte-image1"
            />
          </a>
        </div>
        <div className="gedichte-container5">
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/2cdb8128-5fe7-46c8-9ee4-3c80ed9b5c99"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="image"
              src="/wolke%20cover%20-700w.jpg"
              className="gedichte-image2"
            />
          </a>
        </div>
      </div>
      <div className="gedichte-thq-footer-elm">
        <div className="gedichte-container6">
          <a
            href="mailto:oliver.gwbasse@gmail.com?subject=Anfrage "
            className="gedichte-link3"
          >
            oliver.gwbasse@gmail.com
          </a>
          <span className="gedichte-text2">Zürich</span>
          <span>Datenschutzerklärung</span>
        </div>
      </div>
      <a href="https://play.teleporthq.io/signup" className="gedichte-link4">
        <div aria-label="Sign up to TeleportHQ" className="gedichte-container7">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="gedichte-icon1"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="gedichte-text4">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Gedichte
