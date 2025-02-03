import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to Uppercase!", "Sucess");
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("converted to Lowercase!", "Success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
  
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
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
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> 
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

     </div>
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> this line is for word counting but there is a bug in this line so i have written new line below. */}
        <p>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</p> 
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Something in the above textbox to preview here"}</p>
    </div>
    </>

  )
}
