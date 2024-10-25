import './App.css'
import ListPlaces from './components/ListPlaces'
import { apartamentos, casas, quartos } from './data/hospedagens'

function App() {


  return (
    <>
      <ListPlaces places={apartamentos}/>
      <ListPlaces places={casas}/>
      <ListPlaces places={quartos}/>
      {/*  */}

    </>
  )
}

export default App
