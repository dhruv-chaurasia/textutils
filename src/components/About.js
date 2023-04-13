import React from 'react'

export default function About(props) {
    // const [text,setText] = useState("Enable Dark Mode")
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })
    
    let myStyle = {
        color: props.mode === 'light'?'black':'white',
        backgroundColor: props.mode === 'light'?'white':'black'
    }
    // const handleOnClick = ()=>{
    //     if(text==="Enable Dark Mode")x
    //     {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setText("Disable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setText("Enable Dark Mode")
    //     }
    // }
    return (
        <>
            <div className="container" style={myStyle}>
                <h2>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyse your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>Lorem, ipsum dolor.</strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In labore officiis, cumque asperiores quae inventore quod at corrupti? Ex, a.<code>.accordion-body</code>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque alias soluta unde omnis atque autem nisi! Eligendi maxime officia nemo delectus deserunt. Molestiae rem dignissimos corporis tempora, amet eos tempore modi atque.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, porro repellendus sint saepe enim quos natus veniam optio praesentium fuga quaerat necessitatibus sed tenetur consequatur? Distinctio quidem ullam minima odit. Iste quibusdam dicta atque laborum fugit delectus accusantium explicabo illo?
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <button className='btn btn-primary my-4' onClick={handleOnClick}>{text}</button>
                </div> */}
            </div>
        </>
    )
}
