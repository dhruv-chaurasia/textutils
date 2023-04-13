import React, { useState } from 'react'

export default function TextForm(props) {
    // let myStyle = {
    //     fontStyle: 'none'
    // }
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = (event) => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success")
    }
    const handleDownClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearClick = (event) => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")
    }
    const handleCapitalizeClick = (event) => {
        let arr = text.split(" ")
        let newText = ""
        for (let index = 0; index < arr.length; index++) {
            newText += arr[index].charAt(0).toUpperCase() + arr[index].substring(1,arr[index].length).toLowerCase() + " "
        }
        setText(newText);
        props.showAlert("Capitalized Input Text","success")
    }
    const handleCopy = ()=>{
        // alert("Text Copied")
        let t = document.getElementById('exampleFormControlTextarea1')
        t.select()
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g,' ').trim(); // "thiscontainsspaces"
        setText(newText)
        props.showAlert("Extra Spaces Removed","success")
    }
    // const handleItalicClick = (event) => {
    //     let newText = text;
    //     myStyle["fontStyle"] = 'italic';
    //     setText(newText);
    // }
    
    return (
        <>

            <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#010989':'white', color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCapitalizeClick}>Capitalize</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button className="btn btn-primary mx-2 my-2" onClick={handleItalicClick}>Italic</button> */}
            </div>
            <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
                <h1>Your Text Summary</h1>  
                <p>{text===""?0:text.replace(/\s+/g,' ').trim().split(" ").length} words and {text.length} characters</p>
                <p>It will take {(text===""?0:text.replace(/\s+/g,' ').trim().split(" ").length)/ 125} minutes to read</p>
                <h2>Preview</h2>
                <p >{text.length>0?text:"Enter some text in the text box above to preview"}</p>
            </div>
        </>
    )
}
