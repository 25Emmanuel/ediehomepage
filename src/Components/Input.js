import React from 'react'

const Input = () => {
  return (
    <div className='input-container'>
        <label className='email-label'>Want us to contact you?</label>
        <input type='text' placeholder='Email' className='email'/>
        <button className='join-button'>Join</button>
    </div>
  )
}

export default Input
