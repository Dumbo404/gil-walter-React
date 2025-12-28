import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router, // Geändert auf HashRouter für GitHub Pages Stabilität
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
// Pfade exakt nach deinem Bildschirmfoto (src/views/)
import Home from './src/views/home'
import Kontakt from './src/views/kontakt'
import Gedichte from './src/views/gedichte'
import NotFound from './src/views/not-found'

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