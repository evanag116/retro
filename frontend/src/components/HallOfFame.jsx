import Images from './Images'
import { useNavigate } from 'react-router-dom'

function HallOfFame({HOF}) {
    const navigate = useNavigate()

    const navigateToWinner = () => {
        navigate('/contestant')
    }

    return (
        <div className="container">
            
            <div className="row text-center align-items-center">
                <div className="col">
                    <h2 className="text-white my-5">
                        Who will be the next retro lead?
                    </h2>
                    <button onClick={navigateToWinner} className="btn btn-lg btn-warning">
                            Press for Magic
                    </button>
                </div>
            </div>
            <div className="row">
                <h3 className="text-white text-center mt-5 mb-3">Hall Of Fame </h3>
            </div>
            <div className="slider border-top border-bottom border-white">
                <div className="slide-track d-flex justify-content-between">
                    {HOF.map((HOFamer) => (
                        <Images {...HOFamer} />
                    ))}
                    {HOF.map((HOFamer) => (
                        <Images {...HOFamer} />
                    ))}
                </div>
            </div>

        </div>
        
    )
}

export default HallOfFame
