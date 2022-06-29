import React from 'react'

function ProjectCard({project}) {
  return (
    <div className="col-sm-6 my-2">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description.substring(0, 44)}...</p>
        <p className='btn btn-primary mx-2 my-2'>{project.status}</p>
        <a href={`/projects/${project.id}`} className="btn btn-primary">View</a>
      </div>
    </div>
    </div>
  )
}

export default ProjectCard