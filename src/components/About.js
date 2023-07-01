import React, {useState} from "react";

export default function About(props) {

    let myStyle={
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }

    // const [myStyle, setMyStyle]=useState({
    //     backgroundColor: 'white',
    //     color: 'black'
    // });

    // const [btnText, setBtnText]=useState("Enable Dark Mode")

    // let toggleStyle = ()=>{
    //     if (myStyle.color==='black' ){
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color: 'white'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //         else{
    //             setMyStyle({
    //                 backgroundColor: 'white',
    //                 color: 'black'
    //             })
    //             setBtnText("Enable Dark Mode")
    //         }
    // }
  return (
    <>
      <div className="container my-3 py-1">
        <h1 style={{color: props.mode === 'dark'?'white':'rgb(36 74 104)'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze Your Text</strong> 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils give you a way to analyze your text quickly but effeciently. Be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of word and character.
                Thus it is suitable for writing text with word/charachter limits.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any browsers such as chrome, fire fox, internet explorer, safari, opera. It suits to count character in facebook,
                instagram, blog, book, excel document, pdf documents, essay, etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
        </div> */}
      </div>
    </>
  );
}
