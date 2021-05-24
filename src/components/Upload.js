import React from 'react'
import image from '../image.svg'
import '../css/Upload.css'


function Upload() {
    return (
        <div className="upload">
    
          <div className="">
            <h1>Upload your image</h1>
            <h2>File should be Jpeg, Png</h2>
          </div>
    
          <div className="drag-drop">
            <img src={image}/>
            <h3>Drag & Drop your image here</h3>
          </div>
    
          <div className="">
            <h1>or</h1>
            <button>Choose a file</button>
          </div>
    
        </div>
      )
    }

export default Upload
