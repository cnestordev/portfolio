import React, {useState} from 'react'

function Skills() {

    const [skillSet, setSkillSet] = useState([
        {
            header: 'Frontend',
            skills: ['HTML', 'CSS', 'Javascript', 'React', 'Bootstrap', 'Styled-Components', 'EJS']
        },
        {
            header: 'Backend',
            skills: ['Node', 'Express', 'MongoDB', 'Postgres']
        },
        {
            header: 'Other',
            skills: ['NPM', 'Git', 'Whimsial', 'Figma', 'Notion']
        }
    ])

    const skillArr = skillSet.map(skill => {
        return (
            <div className="skillBox">
                <h4>{skill.header}</h4>
                {skill.skills.map(sk => {
                    return (
                        <p>{sk}</p>
                    )
                })}
            </div>
        )
    })

    return (
        <section className="skillsContainer" id="skills">
            <h3 className="skillsHeader">Skills</h3>
            <div className="skillSetContainer">
                {skillArr}
            </div>
        </section>
    )
}

export default Skills