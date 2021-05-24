import React from 'react'
import '../css/Success.css'

function Success() {
    return (
        <div className="upload">
            <div>
                <div>icon</div>
                <h2>Uploaded Successfully</h2>
            </div>
            <img src="./" alt="image-upload"/>
            <div>
                <div>Link</div>
                <button>copy Link</button>
            </div>
        </div>
    )
}

export default Success
