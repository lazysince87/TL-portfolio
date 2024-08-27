import React from 'react'

import {useNavigate} from 'react-router-dom'

const ProjectItem = ({title, image, id}) => {
  const navigate = useNavigate()

  return (
    <div className='projectItem' onClick={() => {navigate("/display-project/" + id)}}>
      <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
      <h2>{title}</h2>
    </div>
  )
}

export default ProjectItem
