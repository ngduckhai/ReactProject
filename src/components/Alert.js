import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    return (
      <div>
        {this.props.alert && (
          <div
            className='alert alert-danger alert-dismissible fade show'
            role='alert'
          >
            {this.props.alert}
            <button
              type='button'
              className='close'
              data-dismiss='alert'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
        )}
      </div>
    );
  }
}
