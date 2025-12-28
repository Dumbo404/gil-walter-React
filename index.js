// Wir laden React direkt über eine URL, damit der Browser es findet
import React from 'https://esm.sh/react'
import ReactDOM from 'https://esm.sh/react-dom'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'https://esm.sh/react-router-dom'

import './style.css'

// Deine Dateien (Pfade mit Endung .js sind wichtig!)
import Home from './home.js'
import Kontakt from './kontakt.js'
import Gedichte from './gedichte.js'
import NotFound from './not-found.js'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Kontakt} path="/kontakt" />
        <Route component={Gedichte} path="/gedichte" />
        <Route component={NotFound} path="/404" />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))