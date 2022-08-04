export function save_data() {
    console.log('js script started')

    winner = document.getElementById('winner-name').innerHTML

    axios.post('/save/', {
        winner: winner,
    }).then((response) => {
        console.log('axios response: ', response)
    })

    button = document.getElementById('save-button')
    // button.disabled = true;

    return
}




