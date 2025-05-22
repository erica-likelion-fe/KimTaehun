/* useCallback -> 의존성이 바뀌지 않는 한 해당 함수를 계속 사용 */
/* useRef -> useState와 비슷하게 상태값을 저장하는 용도 
             상태 변해도 리렌더링 안됨, .current로 값 접근 가능 
             DOM 조작 시 많이 사용 */

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
    }, [onFileSelected]); //onFileSelected가 변경될 때만 onDrop 재생성

    //react-dropzone 라이브러리의 기본적인 설정
    // 속성 ------------------------------------
    //onDrop: 파일이 드롭, 선택시 호출 콜백 함수 -> acceptedFiles 배열 인자로 받음
    //noClick: 드롭존 클릭시 파일 선택창 열기 가능 ?
    //multiple: 여러개 올리기 가능 ? 
    //accept: 어떤 파일만 허용할건지
    // 반환값 ----------------------------------
    // getRootProps(): 드래그 영역에 필요한 props를 리턴
    // <div {...getRootProps()]}>로 사용
    // getInputProps(): <input type="file" />에 넣을 props를 리턴
    // <input {...getInputProps()]}>로 사용
    // isDragActive: 현재 드래그 중일 때 true
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        noClick: true,
        multiple: false,
        accept: { "image/*": []}
    });
    
    function openFileDialog() {
        inputRef.current?.click();
    }


    // drag 영역과 input 영역을 구분하기 위해 RootProps와 InputProps를 분리
    // inputRef는 <input type="file" ... /> 을 참조 중
    // 내가 파일을 넣으면 react-dropzone이 감지하여 onDrop의 인자인 acceptedFile로 배열을 넘겨줌 
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