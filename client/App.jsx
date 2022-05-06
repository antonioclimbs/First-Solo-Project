import React, { component } from 'react'
import { render } from 'react-dom'
// import MainContainer from './containers/MainContainer'
// import Button from './components/Button'

console.log('getting to app')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      upgrades: [],
      multiplier: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let result = this.state.points;
    multiplier = this.state.multiplier;
    result = result + multiplier;
    this.setState((state) => {
      return (
        {
          points: result
        }
      )
    })

  }

  render() {
    return (
      <div className='container'>
        <Button />
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={() => { this.props.handleClick(); }}

        // onClick={(e) => {
        //   e.preventDefault;
        //   console.log('getting to button', e);
        //   props.addPoints();
        //   console.log(props.points);
        // }}
        >Throw an Error!</button>
        <h6>It's a Feature, Not a Bug</h6>
      </div>
    )
  }

}

export default App;