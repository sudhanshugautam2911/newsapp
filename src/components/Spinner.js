import React, { Component } from 'react'
import Spinner from './Spinner2.gif'

export default class spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img style={{height:'90px'}} src={Spinner} alt="Loading" />
      </div>
    )
   }
}
