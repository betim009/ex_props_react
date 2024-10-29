import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/not-found'
import Places from './pages/places'
import Place from './pages/place'

function App() {


  return (
    <>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/places' element={<Places />}/>
        <Route path='/place/:nome' element={<Place />}/>
        {/* Criar a rota dinâmica para os usuários */}
        {/* <Route path='' element={}/> */}
        <Route path='/*' element={<NotFound/>}/>
      </Routes>

    </>
  )
}

export default App
