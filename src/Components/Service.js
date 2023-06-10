import React from 'react'


const Service = ( {containerClaz, containerHeading, textClass}) => {
  return (
    <>      
      <div className={containerClaz}>
        <p className={textClass}>{containerHeading}</p>
        <p className='servicebody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.</p>
      </div>
    </>
  )
}

export default Service
