import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  addPoint: () => dispatch(actions.addPoint()),
  sellPoint: () => dispatch(actions.sellPoint())
})

const Button = props => {
  <div className='buttonDiv'>
    <button onClick={(e) => {
      e.preventDefault;
      console.log('getting to button', e);
      props.addPoint();
    }}></button>

  </div>
}

export default connect(null, mapDispatchToProps)(Button);