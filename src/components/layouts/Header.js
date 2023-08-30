import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Otávio Rodrigues</h1>
                <span className={styles.legend}>Desenvolvedor Full Stack</span>
            </div>
        </div>
    );
};

export default Header