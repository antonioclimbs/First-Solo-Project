import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

mapDispatchToProps = (dispatch) => ({
  addPoint: () => dispatch(actions.addPoint()),
  addPoint: () => dispatch(actions.addPoint())
})

const Button = props => {
  <div className='buttonDiv'>
    <button><img src="./images/Snek_Michael"
      alt="buttonImage"
      onClick={(e) => {
        // e.preventDefault;
        console.log(e);
        props.addPoint();
      }} /></button>

  </div>
}

export default connect(null, mapDispatchToProps)(Market);