import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/Global.scss'
const rootEl = document.getElementById('root')

const routing = (
  <Router>
    <div>    
      <Route exact path="/" component={App} />  
    </div>
  </Router>
)

render(routing, rootEl)
