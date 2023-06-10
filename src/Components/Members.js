import React from 'react'

const Members = ( {memberImageSrc, memberClass} ) => {
  return (
    <div className={memberClass}>
      <img src={memberImageSrc} alt='member1image' className='member-image' />
    </div>
  )
}

export default Members
