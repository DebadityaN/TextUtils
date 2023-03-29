import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {

    const holderStyle = {
        height: '25px',
        width: '150px',
        marginRight: '10px'
    }

    const changerStyle = {
        border: '0',
        borderRadius: '25%',
        height: '25px',
        width: '25px',
        display: 'inline-block',
        margin: '0 5px',
    }

    const handleBlueClick = () => { handleColorClick('blue') }
    const handleGreenClick = () => { handleColorClick('green') }
    const handleYellowClick = () => { handleColorClick('yellow') }
    const handleRedClick = () => { handleColorClick('red') }

    const handleColorClick = color => {
        document.body.classList = [];
        let mode = ''
        if (color == "blue") {document.body.style.backgroundColor = '#031633'; mode="primary"}
        if (color == "red") {document.body.style.backgroundColor = '#2c0b0e'; mode="danger"}
        if (color == "yellow") {document.body.style.backgroundColor = '#332701'; mode="warning"}
        if (color == "green") {document.body.style.backgroundColor = '#051b11'; mode="success"}

        document.body.style.color = 'white';
        document.getElementById("navbar").setAttribute('data-bs-theme', 'dark');
        document.getElementById("labelForModeChange").classList.add('text-light');

        let btns = document.getElementsByClassName('btn')
        for (let i = 0; i < btns.length; i++) {
            const element = btns[i];
            if (element.classList.contains('btn-secondary')) { element.classList.remove('btn-secondary') } else
            if (element.classList.contains('btn-primary')) { element.classList.remove('btn-primary') } else
            if (element.classList.contains('btn-danger')) { element.classList.remove('btn-danger') } else
            if (element.classList.contains('btn-success')) { element.classList.remove('btn-success') } else
            if (element.classList.contains('btn-warning')) { element.classList.remove('btn-warning') } 

            console.log(`btn-${mode}`);
            element.classList.add(`btn-${mode}`)
        }
    }

    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar" data-bs-theme={props.mode}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/about">About</a> */}
                    </li>
                </ul>

                <div className="div" style={holderStyle}>

                    <button className="color bg-primary" onClick={handleBlueClick} style={changerStyle}></button>
                    <button className="color bg-success" onClick={handleGreenClick} style={changerStyle}></button>
                    <button className="color bg-warning" onClick={handleYellowClick} style={changerStyle}></button>
                    <button className="color bg-danger" onClick={handleRedClick} style={changerStyle}></button>

                </div>

                <div className="form-check form-switch">
                    <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault" id="labelForModeChange">Enable {props.mode==="light"?"Dark":"Light"} mode</label>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                </div>
            </div>
        </div>
    </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set title here',
}
