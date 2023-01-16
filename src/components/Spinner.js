import React  from 'react'
import Spinner from './Spinner2.gif'

const spinner = () => {


    return (
      <div className='text-center'>
        <img style={{height:'90px'}} src={Spinner} alt="Loading" />
      </div>
    )
   
}
export default spinner