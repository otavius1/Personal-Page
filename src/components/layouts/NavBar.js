import { Link } from 'react-router-dom'
import { BsFillHouseDoorFill, BsPersonFill } from "react-icons/bs";

import styles from './NavBar.module.css'
import Header from './Header'

function NavBar () {
    return (
        <div className={styles.navbar}>
            <ul className={styles.container}>
                <li className={styles.links}>
                    <Link to="/"> < BsFillHouseDoorFill/> </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/about"> Sobre </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li className={styles.links}>
                    <Link to="/social">Redes sociais</Link>
                </li>
            </ul>
        </div>
    )
}


export default NavBar