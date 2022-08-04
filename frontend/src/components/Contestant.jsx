import { useEffect, useState } from 'react'
import axios from 'axios'
import { save_data } from '../js/main'

function Contestant () {
    const [winner, setWinner] = useState('LeBron James')

    async function save_data() {
        try {
            console.log('js script started')
            let selectee = document.getElementById('winner-name').innerHTML
            axios.post('/save/', {
                winner: selectee,
            }).then((response) => {
                console.log('axios response: ', response)
            })
            let button = document.getElementById('save-button')
            button.disabled = true;
            return
        }
        catch(error) {
        }
    }


    async function getData() {
      try{
        const response = await axios.get('/winner')
        setWinner(response.data.winner.name)
      }
      catch(error){
        console.error('Error occurred fetching data: ', error)
      }
    }    useEffect( ()=> {
        // console.log("here")
      getData()
    } , [])
    const fullName = winner.split(" ")
    async function sayHello() {
        response = await axios.get('/save')
        return response
    }


    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h3 className="text-white">
                    And the winner is......
                </h3>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="position-relative d-block" id="showcase">
                    <div id="sunburst"></div>
                    <img src={`/static/img/students/${fullName[0]}%20${fullName[1]}.png`} className='border border-3 border-dark rounded' id='winner-image' />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <h1>
                    <div className="shake1 me-3">
                        <i className="bi-trophy-fill" style={{color: 'gold'}}></i>
                    </div>     
                </h1>
                <h3 className="text-white display-4 rainbow-text" id="winner-name">{winner}</h3>
                <h1>
                    <div className="shake2 ms-3">
                        <i className="bi-trophy-fill" style={{color: 'gold'}}></i>
                    </div>
                </h1>
            </div>
            <div className="row pt-5 text-end">
                <p>
                    <button className="btn btn-sm btn-warning" onClick={save_data()} id="save-button">Save Winner</button>
                </p>
            </div>
        </div>
    )
}

export default Contestant