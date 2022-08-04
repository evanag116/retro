function Images ({name}) {
    
    const fullName = name.split(" ")
    return (
        <img src={`/static/img/students/${name}.png`} className="slide"></img>
    )
}


export default Images
