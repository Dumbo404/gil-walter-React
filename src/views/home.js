import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
          href="https://trim-tepid-oyster-w9bx29.teleporthq.app/"
        />
      </Helmet>
      <div className="home-thq-header-elm">
        <header className="home-container2">
          <Link to="/" className="home-navlink1">
            <h1 className="home-text1">Gil Walter </h1>
          </Link>
        </header>
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <img alt="image" src="/profil-400w.jpg" className="home-image" />
          <span className="home-text2">Oliver Gil Walter Basse </span>
          <span className="home-text3">Autor. </span>
          <animate-on-reveal
            animation="pulse"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <Link
              to="/gedichte"
              data-thq-animate-on-reveal="true"
              className="home-navlink2 button"
            >
              Gedichte
            </Link>
          </animate-on-reveal>
          <animate-on-reveal
            animation="pulse"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <Link
              to="/kontakt"
              data-thq-animate-on-reveal="true"
              className="home-navlink3 button"
            >
              Über mich
            </Link>
          </animate-on-reveal>
        </div>
        <div className="home-container5">
          <span className="home-text4">Texte (Auswahl): </span>
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
              an den ersten anlehnen konnte, um einen Turm zu bauen …
            </span>
            <br></br>
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/d23621cc-df3a-44a0-b0fd-1eb4206bd477"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link12"
          >
            Mein Kühlschrank, meine Wasserleitung, mein Teppich, unser
            Vormieter, meine Verzweiflung– und ich, Kurzprosa: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/d23621cc-df3a-44a0-b0fd-1eb4206bd477"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link13"
          >
            Heute habe ich mir wirklich nichts Böses gedacht … 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/16adaa93-f6b2-47cd-b6ae-5729a78cf491"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link14"
          >
            De (gstörti) Lubbläser, Kurzprosa: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/16adaa93-f6b2-47cd-b6ae-5729a78cf491"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link15"
          >
            De mit de gele Weschte und em lute Blsogrät a sim Rucke, de jagt de
            ganze arme Blätter am Bode wie en Gstörte hinderher ... 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/821eed9f-70cc-4cfc-a283-4f75ff9be22d"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link16"
          >
            Warum ich kein Vogel sein möchte und überhaupt keiner einer sein
            sollte, Slam: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/821eed9f-70cc-4cfc-a283-4f75ff9be22d"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link17"
          >
            Die Vögel vor meinem Fenster fliegen Amok ... 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/92826c09-0295-48a8-a5b8-4aa1274fc024"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link18"
          >
            Der fünfte Duschvorhang in zwei Monaten, Slam: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/92826c09-0295-48a8-a5b8-4aa1274fc024"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link19"
          >
            Bei den Raten, in denen ich wir du unseren Duschvorhang austauscht,
            kannst du wir ich schon zur Bank gehen, weil ... 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/72d75f74-ac01-4ee4-a29b-2b8cec0ba4ba"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link20"
          >
            Mein leerer Kühlschrank voller Sachen, die überhaupt nicht (nicht
            aufs Geringste) zueinander passen, Slam: 
          </a>
          <a
            href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/41b8adf8-8705-4fa4-bedd-28a885c6ff8a/72d75f74-ac01-4ee4-a29b-2b8cec0ba4ba"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link21"
          >
            Reibkäse. Links im oberen Fach, aber weder Nudeln noch Sauce, die
            dazu passt. 
          </a>
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
        <span className="home-text8">Datenschutzerklärung </span>
      </div>
      <a href="https://play.teleporthq.io/signup" className="home-link25">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon1"
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
          <span className="home-text9">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
