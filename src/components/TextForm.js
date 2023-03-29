import React, {useState} from 'react'

export default function Textform(props) {
    const handleOnChange = event => { setText(event.target.value) }
    const handleUpClick = () => { setText(text.toUpperCase()); props.showAlert('Converted text to uppercase', 'success') }
    const handleLoClick = () => { setText(text.toLowerCase()); props.showAlert('Converted text to lowercase', 'success') }

    const handleFindChange = event => { findText(event.target.value) }
    const handleReplChange = event => { replText(event.target.value) }
    const handleFnRlAllClick = () => { setText(text.replaceAll(fText, rText)); props.showAlert('Replaced first text', 'success') }
    const handleFnRlClick = () => { setText(text.replace(fText, rText)); props.showAlert('Replaced all text', 'success') }

    const [text, setText] = useState('Enter text here');
    const [fText, findText] = useState('');
    const [rText, replText] = useState('');

    return (
        <>
        <div className="container mt-2">
            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className={`form-control bg-${props.mode==='dark'?'dark':'white'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-2" id="button" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <input type="text" placeholder="Find" value={fText} onChange={handleFindChange} id="find-word" className={`form-control mt-2 mx-2 bg-${props.mode==='dark'?'dark':'white'} text-${props.mode==='light'?'dark':'light'}`} />
            <input type="text" placeholder="Replace" value={rText} onChange={handleReplChange} id="repl-word" className={`form-control mt-2 mx-2 bg-${props.mode==='dark'?'dark':'white'} text-${props.mode==='light'?'dark':'light'}`} />
            <button className="btn btn-secondary mx-2 mt-2" onClick={handleFnRlClick}>Replace First</button>
            <button className="btn btn-secondary mx-2 mt-2" onClick={handleFnRlAllClick}>Replace All</button>
        </div>

        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{text.split(' ').length*0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}
