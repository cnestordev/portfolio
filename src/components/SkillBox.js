import React from 'react'

const SkillBox = ({ skill }) => {
  return (
    <div className="skillBox">
      <h4>{skill.header}</h4>
      {skill.skills.map(sk => {
        return <p>{sk}</p>
      })}
    </div>
  )
}

export default SkillBox
