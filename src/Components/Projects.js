import React from 'react'

const Projects = ( {imageSrc, title, subTitle} ) => {
  return (
    <div className='card-container'>
      <div className='projectimg-container'>
        <img src={imageSrc} alt='project-description' className='project-img'/>
      </div>
      <p className='subtitle'>{subTitle}</p>
      <p className='title'>{title}</p>
    </div>
  )
}

export default Projects
