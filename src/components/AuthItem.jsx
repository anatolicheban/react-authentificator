import React from 'react'

const AuthItem = ({ passkey, service }) => {
  return (
    <div className='auth__item'>
      <p className='auth__item-service'>{service}</p>
      <p className='auth__item-key'>{passkey}</p>
    </div>
  )
}

export default AuthItem