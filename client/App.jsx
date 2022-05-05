import React, { component } from 'react'
import { render } from 'react-dom'
import MainContainer from './containers/MainContainer'

console.log('app is here')

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1>App Header</h1>
        <MainContainer />
      </div>
    )
  }

}

export default App;