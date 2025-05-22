/* GPT - help */
import { useCallback, useRef } from "react"
import {ReactComponent as DriveFile} from "../asset/material-symbols-light_drive-file-move-outline-sharp.svg"
import {useDropzone} from 'react-dropzone'
import Button from "./Button";
import "../style/FileUploadZone.css"
import "../style/EditPosting.css"

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
        <div className="edit-posting-form-items">
            <span className="edit-posting-item-title">Image *</span>
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