import React from 'react'
import { useState } from "react"

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        console.log("uppercase was clicked");
        setText(newText)
        props.showAlert(" Success", "UpperCase has been clicked");


    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        console.log("LowerCase was clicked");
        setText(newText)
        props.showAlert(" Success", "LowerCase has been clicked");
    }
    const clearText = () => {
        let newText = "";
        console.log("clear text");
        props.showAlert(" Success", "ClearText has been clicked");
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("uppercase was clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272D27', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Covert to Lower case</button>
                <button className="btn btn-success mx-2" onClick={clearText}>Clear Text</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>your text summary</h2>
                <p>character are {text.length} and words are {text.split(" ").length}</p>
                <p>{0.008 * text.split(" ").length} minut read </p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
