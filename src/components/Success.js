import React from 'react'
import { getUrl } from './url'
import '../css/Success.css'
import { useHistory } from 'react-router'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



function Success() {
    const history = useHistory();
    if (!getUrl()) {
      history.push("/");
    }
    const handleCopy = () =>{
        /* Get the text field */
        //const copyText = document.querySelector(".myInput");

        /* Select the text field */
        getUrl().select();
        getUrl().setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + getUrl().value);
    }
    return (
        <div className="upload">
            <div className="success-top">
                <CheckCircleIcon></CheckCircleIcon>
                <h2>Uploaded Successfully</h2>
            </div>
            <img className="img" src={getUrl()}alt="image-upload"/>
            <div className="success-bottom">
                <p className="myInput">{getUrl()}</p>
                <button onClick={handleCopy}>copy Link</button>
            </div>
        </div>
    )
}

export default Success
