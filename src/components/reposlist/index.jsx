import { useEffect, useState } from "react";
import styles from './reposlist.module.css'

const ReposList = ({nomeUsr})=>{
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(()=> {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsr}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(()=> {
                setEstaCarregando(false)
                setRepos(resJson);
            },1000)
        })
    },[nomeUsr])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome: </b>
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                        <b> Linguagem: </b>
                        {language} 
                        </div>
                        <a className={styles.itemLink} target='_blank' href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList