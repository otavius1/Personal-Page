import { useState, useEffect } from 'react'
import Card from '../layouts/Card'
import styles from '../layouts/Card.module.css'
import logo from '../../assets/logo512.png'

function Projects() {

    const [projects, setProjects] = useState([])

    // useEffect (() => {
    //     fetch('http://localhost')
    // })

    return (
        <div className={styles.projects}>
            <Card
                title="Projeto teste"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />

            <Card
                title="Projeto teste 2"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />

            <Card
                title="Projeto teste 3"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />

            <Card
                title="Projeto teste 4"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />

            <Card
                title="Projeto teste 5"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />

            <Card
                title="Projeto teste 6"
                description="Projeto teste Projeto teste Projeto teste "
                imgAdress={logo}
                imgName="React"
                link="https://react-icons.github.io/react-icons"
                linkName="Link do projeto"
            />
            
        </div>
    )
}

export default Projects