import React, {useState} from 'react'

function Projects() {

    const [projectsSet, setProjectsSet] = useState([
        {
            name: "Project 1",
            description: 'This is a project example',
            photoUrl: 'https://picsum.photos/200'
        },
        {
            name: "Project 2",
            description: 'Second example of project',
            photoUrl: 'https://picsum.photos/200'
        },
        {
            name: "Project 3",
            description: 'Third example of project',
            photoUrl: 'https://picsum.photos/300'
        }
    ])

    const projectsArr = projectsSet.map(project => {
        return (
            <div className="projectBox">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img className="projectImg" src={project.photoUrl} />
            </div>
        )
    })

    return (
        <section className="projectsContainer">
            <h3 className="projectsHeader">Projects</h3>
            <div className="projectBoxContainer">
                {projectsArr}
            </div>
        </section>
    )
}

export default Projects