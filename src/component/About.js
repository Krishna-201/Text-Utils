import React from 'react'

export default function About(props) {
    let myStyle = {
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    }
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className='my-3'>About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>🔹 Who We Are</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Welcome to TextUtils, the ultimate tool for all your text processing needs! We are dedicated to providing a simple, fast, and effective way to format and analyze text with ease. Whether you're a student, writer, or developer, our tool is designed to enhance your productivity.

                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>🔹 What We Do</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        At TextUtils, we offer a wide range of text manipulation features, including:
✔️ Convert text to uppercase, lowercase, or title case
✔️ Word and character count for better text analysis
✔️ Remove extra spaces and clean up messy text
✔️ Copy text with one click for convenience
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>🔹 Our Mission</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Our goal is to make text processing easy, fast, and accessible for everyone. We strive to offer a secure and user-friendly platform that helps users manage their text efficiently.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container '>
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
