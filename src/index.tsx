import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Test from './components/Test'

// import './assets/scss/Global.scss'

const rootEl = document.getElementById('root')

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/test" component={Test} />
    </div>
  </Router>
)

render(routing, rootEl)
