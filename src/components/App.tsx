import * as React from 'react'
import { hot } from 'react-hot-loader'

const reactLogo = require('./../assets/img/react_logo.svg')
// import './../assets/scss/Global.scss'
const test = require('./../assets/scss/Global.scss')
// import * as style from './App.module.css'
// const css = require('./Test.module.css')
const css = require('./../assets/scss/App.module.scss')

import cx from 'classnames'


class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className={css.app}>
        <h1 className={cx(test['bg-blue-500'], test['p-2'])}>Hello World!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)
