import React, { component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

console.log('app is here')
class App extends React {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>App</h1>
    )
  }
  
}

export default App;