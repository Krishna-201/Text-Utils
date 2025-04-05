import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const  handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const  handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const  handleReClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success")

    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#083f6f'}}>
            <h1 style={{color:props.mode==='dark'?'white':'#083f6f'}}>{props.heading}</h1>
            <div class="mb-3">
                
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{
                backgroundColor: props.mode==='dark'?'#13466e':'white',
                color: props.mode==='dark'?'white':'#083f6f'
            }} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReClick}>Clear </button>
            <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text </button>
            <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>



        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#083f6f'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0
            }).length} words and {text.length} character</p>
            <p>{0.008*text.split(' ').filter((element)=>{ return element.length!==0
            }).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
