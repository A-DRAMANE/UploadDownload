import React,{ useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { app } from '../base'
import { setUrl } from './url'
import image from '../image.svg'
import '../css/Upload.css'
import '../css/Loading.css'


function Upload() {
  
    const [fileUrl, setFileUrl] = useState('')
    const history = useHistory()

  const handleLoad = async (e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setFileUrl(await fileRef.getDownloadURL())
  }

  const handleShow = () =>{
    const load = document.querySelector('.load');
    const upload = document.querySelector('.upload');
    if (fileUrl == '') {
      upload.style.display = 'none'
      load.style.display = 'flex'
    }
    
    console.log("zoooo");
  }

  useEffect(() => {
    if (fileUrl !== '') {
      const load = document.querySelector('.load');
      const upload = document.querySelector('.upload');
      upload.style.display = 'flex'
      load.style.display = 'none'
      setUrl(fileUrl);
      history.push("/success");
    }
  }, [fileUrl])

    return (
      <>
        {/*loader*/}
        <div style={{display:'none'}} className="load">
            <h2>Uploading</h2>
            <div className="mouve">
                <div className="mouve-in"></div>
            </div>
        </div>

        {/*uploader*/}
        <div className="upload">
    
          <div className="upload-tile">
            <h1>Upload your image</h1>
            <h2>File should be Jpeg, Png</h2>
          </div>
    
          <div className="drag-drop">
            <img src={image} alt="drop-drag"/>
            <h3>Drag & Drop your image here</h3>
          </div>
    
          <div className="upload-bottom">
            <h1>or</h1>
            <input 
              type="file" 
              placeholder="Choose a file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) =>{
                handleLoad(e);
                handleShow();

              }}
             />
             
          </div>
    
        </div>
      </>
      )
    }

export default Upload
