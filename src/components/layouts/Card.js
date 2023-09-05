import styles from './Card.module.css'

function Card({ title, description, imgAdress, imgName, link, linkName }) {
    return (
        <div className={styles.Card}>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>{description}</p>
                <img src={imgAdress} alt={imgName} className={styles.imagem}/>
                <p><a href={link}>{linkName}</a></p>
            </div>
        </div>
    )
}


export default Card