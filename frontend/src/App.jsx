import { useState, useEffect } from 'react'
import './App.css'
import HallOfFame from './components/HallOfFame'
import Contestant from './components/Contestant'
import axios from 'axios'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [hallOfFame, setHallOfFame] = useState([])
  async function getData() {

    try{
      const jsonResponse = await axios.get('/contestant-is')
      setHallOfFame(jsonResponse.data.hall_of_fame)
    }
    catch(error){
      console.error('Error occurred fetching data: ', error)
    }
  }
  
  useEffect( ()=> {
    getData()
  } , [])

  return (
    <div>
      <section className="bg-black">
          <div className="container pt-5 pb-3">
              <div className="row text-center">
                  <h1 className="display-1 gameshow">
                      <a href="{% url 'index' %}" className="text-decoration-none text-warning">r<u>OMEO</u> p<u>LATOON</u></a>
                  </h1>
              </div>
              <div className="row text-center">
                  <h1 className="py-4 text-white">Retro Roulette</h1>
              </div>
          </div>
      </section>
      <hr class="m-0 text-white"/>
      <Router>
        <Routes>
          <Route path='/' element={<HallOfFame HOF={hallOfFame}/>} />
          <Route path='/contestant' element={<Contestant />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
