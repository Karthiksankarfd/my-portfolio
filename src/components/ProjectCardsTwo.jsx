import React from 'react'

const ProjectCardsTwo = ({...project}) => {
  return (
    <div className='project-cards w-auto  rounded-3xl border-[1px] border-gray-300 overflow-hidden'>
            <div className="project_name flex">
                <div className="name p-5 text-white">
                        {project.name}
                </div>
                <div className="right">

                </div>
            </div>
            <img className='rounded-3xl object-fill' src={project.image} alt="" />
    </div>
  )
}

export default ProjectCardsTwo
