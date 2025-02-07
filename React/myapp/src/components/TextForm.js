import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text );
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied", "success");
    }
  
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success");
    }
    const [text, setText] = useState('');
    // text = "new text";  wrong way to change the state
    // setText = ("new text"); correct way to change the state 
  return (
    <>   
    <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
     <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743' }} id="mybox" rows="8"> </textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button> 
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

     </div>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> this line is for word counting but there is a bug in this line so i have written new line below. */}
        <p>{text.split(/\s+/).filter(word => word.trim() !== "").length} words, {text.length} Characters</p> 
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>

  )
}
