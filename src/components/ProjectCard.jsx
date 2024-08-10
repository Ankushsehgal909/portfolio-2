import React from 'react'

export default function ProjectCard({image}) {
  return (
    <div className="h-56 w-80 mt-8 ml-8 border border-gray-100">
      <img className="h-full max-w-full" src={image} alt="project"  />
    </div>
  )
}
