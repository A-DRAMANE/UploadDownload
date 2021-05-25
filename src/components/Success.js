import React from 'react'
import { getUrl } from './url'
import '../css/Success.css'
import { useHistory } from 'react-router'



function Success() {
    const history = useHistory();
    if (!getUrl()) {
      history.push("/");
    }
    return (
        <div className="upload">
            <div>
                <div>icon</div>
                <h2>Uploaded Successfully</h2>
            </div>
            <img src={getUrl()}alt="image-upload"/>
            <div>
                <div>Link</div>
                <button>copy Link</button>
            </div>
        </div>
    )
}

export default Success
