import React from 'react'

const ProjectCardsTwo = ({...project}) => {
  return (
    <div className='project-card w-auto  rounded-3xl border-[1px] border-gray-300 overflow-hidden'>
            <div className="project_name flex">
                <a href={project?.link} className="name p-5 text-white">
                        {project.name}
                </a>
                <div className="right">

                </div>
            </div>
            <img className='rounded-3xl object-fill' src={project.image} alt="" />
    </div>
  )
}

export default ProjectCardsTwo
