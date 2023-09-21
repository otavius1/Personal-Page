import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl"
import { BiLogoGmail } from "react-icons/bi";

import Footer from '../layouts/Footer'

import styles from './Social.module.css'

const Social = () => {
    return (
        <div className={styles.social}>
            <div>
               <a href="https://www.linkedin.com/in/otavio-rodrigues-9684aa162/" target="_blank" rel="noreferrer"> < SlSocialLinkedin className={styles.Media} /> </a>
            </div>
            <div>
                <a href="https://github.com/otavius1" target="_blank" rel="noreferrer">  < SlSocialGithub className={styles.Media} /> </a>
            </div>
            <div>
                <a href="mailto:otavio.rodri3@gmail.com" target="_blank" rel="noreferrer">  < BiLogoGmail className={styles.Media} /> </a>
            </div>
        </div>
    )
}

export default Social