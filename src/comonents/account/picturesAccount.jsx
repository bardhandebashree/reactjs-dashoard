import React, { useState } from "react";
import styled from "styled-components";
import { BoxContainer } from "../account/common";

export function PicturesAccount({props}){
    console.log("homepage")
    const [file, setFile] = useState();
    const handleChange = async (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="UploadPicture">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
            
  
        </div>
    )

}
