import React from 'react'
import { useParams } from 'react-router-dom'
import {ProjectList} from '../../data/ProjectList'
import LinkIcon from '@mui/icons-material/Link';

import './DisplayProject.css'

const DisplayProject = () => {
    const {id} = useParams() 
    const project = ProjectList[id]

  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img src={project.image}/>
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <LinkIcon className='icons' onClick={() => window.open(project.link)}/>
    </div>
  )
}

export default DisplayProject