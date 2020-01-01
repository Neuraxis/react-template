import * as React from 'react'
import { hot } from 'react-hot-loader'

const reactLogo = require('./../assets/img/react_logo.svg')

// const test = require('./../assets/styles/Global.scss')
import './../assets/styles/Global.scss'
const css = require('./App.module.scss')
import cx from 'classnames'


class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className={css.app}>
        <h1 className="test p-4 bg-red-100">Hello World!</h1>
        <p>Foo to the barz</p>
        <img src={reactLogo.default} height="480" />
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)
