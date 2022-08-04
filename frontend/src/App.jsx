import { useState, useEffect } from 'react'
import './App.css'
import HallOfFame from './components/HallOfFame'
import Contestant from './components/Contestant'
import axios from 'axios'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [hallOfFame, setHallOfFame] = useState([])
  // const [winner, setWinner] = useState([])


  async function getData() {

    try{
      // const response = await axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        
      // })
      const jsonResponse = await axios.get('/contestant-is')
      // const response = await axios.get('/winner')
      // console.log(jsonResponse.data)
      // console.log(response.data.winner)

      // console.log(jsonResponse.data)
      
      
      // console.log(jsonResponse.data.hall_of_fame)
      // console.log(response.data.hits)
      setHallOfFame(jsonResponse.data.hall_of_fame)
      // setWinner(response.data.winner)
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

      {/* <Router> 
        <Routes>
          <Route path='/' element={<HomePage articles={articles}/>} /> */}

      
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
