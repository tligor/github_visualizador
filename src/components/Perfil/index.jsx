import styles from './Perfil.module.css'

const Perfil = ({nomeUsr}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsr}.png`}/>
            <h1 className={styles.name}>
                {nomeUsr}
            </h1>
        </header>
    )
}

export default Perfil