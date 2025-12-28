import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'

// Pfade angepasst: "src/views/" entfernt, da alles im Hauptverzeichnis liegt
import Home from './home'
import Kontakt from './kontakt'
import Gedichte from './gedichte'
import NotFound from './not-found'

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