import { useState, useEffect } from 'react'
import Card from '../layouts/Card'
import styles from '../layouts/Card.module.css'
import logo from '../../assets/logo512.png'

function Projects() {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.projects}>
            {projects.length > 0 &&
                projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.description} // Usar a descrição como título
                        description={project.description}
                        imgAdress={project.imgAdress}
                        imgName={project.imgName}
                        link={project.link}
                        linkName={project.linkName}
                    />

                ))}
        </div>
    )
}

export default Projects