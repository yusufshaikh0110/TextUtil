import React, {useState} from "react";

export default function TextForm(props) {
    const[text,setText]=useState("");
    

    const handleUpClick=()=>{
        // console.log("button clicked" + text);
        let newText = text.toUpperCase();
    setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
        // console.log("button clicked" + text);
        let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
    }
    const handleClear=()=>{
        // console.log("button clicked" + text);
        let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success")
    }
    const handleCopy=()=>{
        // console.log("button clicked" + text);
        // let newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text)
        // document.getSelection.removeAllRanges();
        props.showAlert("Copy to Clipboard","success")
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success")
    }
    const handleOnChange=(event)=>{
        // console.log("handle  on change");
        setText(event.target.value)
    }
    
  return (
    <>
        <div className="container mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="mb-3">{props.heading}</h1> 
          <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8">
          </textarea>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClear}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</b></p>
            <p><b>{0.08 * (text.split(/\s+/).filter((element)=>{return element.length!==0})).length} Minutes to read {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</b></p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  );
}
