import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

// hot module replacement (hmr)
if (module.hot) {
  module.hot.accept('./App.js', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
