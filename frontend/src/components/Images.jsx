function Images ({name}) {
    
    const fullName = name.split(" ")
    // console.log(fullName)
    // console.log(name)
    return (
        <img src={`/static/img/students/${name}.png`} className="slide"></img>
        
    )
}


export default Images
