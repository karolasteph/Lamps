//import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import BotonLampGlobal from './components/BotonLampGlobal'
import BotonLampIndividual from './components/BotonLampIndividual'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BotonLampIndividual/>
      <BotonLampGlobal/>
    </div>
  )
}

export default App
