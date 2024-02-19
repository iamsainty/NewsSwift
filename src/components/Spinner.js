import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" style={{ height: '35px', width: '35px' }} />
    </div>
  )
}

export default Spinner
