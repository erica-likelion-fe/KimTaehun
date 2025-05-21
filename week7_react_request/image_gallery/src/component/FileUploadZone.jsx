/* GPT - help */
import { useState, useCallback, useRef } from "react"
import {ReactComponent as DriveFile} from "../asset/material-symbols-light_drive-file-move-outline-sharp.svg"
import {useDropzone} from 'react-dropzone'
import Button from "./Button";
import "../style/FileUploadZone.css"
import "../style/CreatePost.css"

export default function FileUploadZone({ imgUrl, onFileSelected }) {
    const inputRef = useRef(null);
    
    const onDrop = useCallback(acceptedFiles => {
        onFileSelected(acceptedFiles);
    }, [onFileSelected]);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        noClick: true,
        multiple: false,
        accept: { "image/*": []}
    });
    
    function openFileDialog() {
        inputRef.current?.click();
    }

    return (
        <div className="create-post-form-items">
            <span className="create-post-item-title">Image *</span>
            <input {...getInputProps()} ref={inputRef} style={{ display: "none" }}/>
            {imgUrl ? (
                <div className="file-upload-zone-preview-div">
                    <img className="file-upload-zone-preview-img" src={imgUrl} alt="Preview" />
                </div>
            ) : (
                <div className="file-upload-zone-upload-div" {...getRootProps()}>
                    {
                        isDragActive ? (<span>Drop the file here…</span>) : (
                        <>
                            <DriveFile width={48} height={48} />
                            <span>Drag and drop your file here</span>
                        </>)
                    }
                </div>
            )}
            <Button text="My PC" handleButtonClick={openFileDialog} />
        </div>
    )
}