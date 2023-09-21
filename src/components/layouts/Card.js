import styles from './Card.module.css'

import { AiFillGithub } from "react-icons/ai";

function Card({ title, description, imgAdress, imgName, link }) {
    return (
        <div className={styles.Card}>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
                <img src={imgAdress} alt={imgName} className={styles.imagem}/>
                <a href={link} target='_blank' rel="noreferrer" className={styles.link} ><AiFillGithub/></a>
            </div>
        </div>
    )
}


export default Card