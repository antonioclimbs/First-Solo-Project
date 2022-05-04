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
        <MainContainer />
      </div>
    )
  }

}

export default App;