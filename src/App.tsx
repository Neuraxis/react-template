import * as React from 'react'
import { hot } from 'react-hot-loader'
import Home from '@screens/home/home'

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div>
        <Home></Home>
      </div>
    )
  }
}

declare let module: object

export default hot(module)(App)
