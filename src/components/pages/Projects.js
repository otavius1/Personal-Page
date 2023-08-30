import React from 'react'
import Card from '../layouts/Card'
import styles from '../layouts/Card.module.css'
import logo from '../../assets/logo512.png'

function Projects() {
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
            
        </div>
    )
}

export default Projects