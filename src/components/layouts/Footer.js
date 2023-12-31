import styles from './Footer.module.css'

function FooterComponent () {
    return (
    <div classname={styles.Footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#e7008a" fill-opacity="0.1" d="M0,224L80,234.7C160,245,320,267,480,234.7C640,203,800,117,960,90.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
            </path>
        </svg>
    </div>
    )
}

export default FooterComponent