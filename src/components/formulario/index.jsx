import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])

    const alteraNome = (e) =>{
        setNome(estadoAnterior => {
            return e.target.value
        })
    }
    const renderizaResultado = () => {
        const soma = parseFloat(materiaA) + parseFloat(materiaB) + parseFloat(materiaC)
        const media = soma / 3
        if (media >= 7 ){
            return (<p>Você foi aprovado!
                Sua nota é {media.toFixed(2)}
            </p>)
        }else{
            return (<p>Você foi reprovado!
                Sua nota é {media.toFixed(2)}
            </p>)
        }
    }

    return (
        <form>
        {[1,2,3,4,5].map(item => <li>{item}</li>)}

        <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
        <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)}/>
        <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)}/>
        <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)}/>
        {renderizaResultado()}
        </form>
    )
}

export default Formulario