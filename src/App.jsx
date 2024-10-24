import { useState } from 'react'

import Perfil from './components/Perfil'
import Formulario from './components/formulario'
import ReposList from './components/reposlist'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsr, setNomeUsr] = useState('')
  return (
    <>
    <input className='seach' type="text" placeholder="Digite o nome do usuário e saia do campo" onBlur={(e)=> setNomeUsr(e.target.value)} />

      {nomeUsr.length > 4 && (
        <>
        <Perfil nomeUsr={nomeUsr}/>
        <ReposList nomeUsr={nomeUsr}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Exibe/Oculta</button> */}

    </>
  )
}

export default App
