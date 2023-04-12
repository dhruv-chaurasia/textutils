import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    const toggleRed = ()=>{
        props.toggleColor('red')
    }
    const toggleBlue = ()=>{
        props.toggleColor('blue')
    }
    const toggleGreen = ()=>{
        props.toggleColor('green')
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={toggleRed} id="flexRadioDefault1" />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Red
                    </label>
            </div>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={toggleBlue} id="flexRadioDefault2" checked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Blue
                    </label>
            </div>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={toggleGreen} id="flexRadioDefault2" checked />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Green
                    </label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.switchTxt}</label>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set About Text here"
}