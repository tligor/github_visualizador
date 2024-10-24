import { useEffect, useState } from "react";
import styles from './reposlist.module.css'

const ReposList = ({nomeUsr})=>{
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [throwErr, setThrowErr] = useState('');
    useEffect(()=> {
        setEstaCarregando(true);
        setThrowErr('');
        fetch(`https://api.github.com/users/${nomeUsr}/repos`)
        .then(res => {
            if(!res.ok){
                if (res.status === 404){
                    throw new Error('Usuário não encontrado');
                }else {
                    throw new Error('Erro ao carregar os repositórios');
                }
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(()=> {
                setEstaCarregando(false)
                setRepos(resJson);
            },1000)
        }).catch(e => {
            setEstaCarregando(false)
            setThrowErr(e.message)
            console.error(e)
        })
    },[nomeUsr])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : throwErr ? (
                <div className={styles.throwError}>
                    <h1 className={styles.throwErrorTitle}>Um erro foi encontrado</h1>
                    <p className={styles.throwErrorMessage}>{throwErr}, verifique e tente novamente.</p>
                </div>
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