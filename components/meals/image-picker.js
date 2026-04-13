'use client';
import { useRef } from 'react';
import classes from './image-picker.js';

export default function ImagePicker({label, name}) {
    const ImageInputRef = useRef();

    function handleImage() {
        ImageInputRef.current.click();
    }

    return(
        <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <input 
                    className={classes.input} 
                    type="file" 
                    id={name} 
                    accept='image/png, image/jpeg' 
                    name={name}
                    ref={ImageInputRef}
                />
                <button className={classes.button} type='button' onClick={handleImage}>
                    Elige una imagen
                </button>
            </div>
        </div>
    );
}