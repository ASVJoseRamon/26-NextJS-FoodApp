'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image.js';

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState();
    const ImageInputRef = useRef();

    function handleImage() {
        ImageInputRef.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if(!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file);
    }

    return(
        <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No se ha elegido imagen</p>}
                    {pickedImage && (
                        <Image 
                            src={pickedImage}
                            alt="Imagen seleccionada por el usuario"
                            fill
                        />
                    )}
                </div>
                <input 
                    className={classes.input} 
                    type="file" 
                    id={name} 
                    accept='image/png, image/jpeg' 
                    name={name}
                    ref={ImageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type='button' onClick={handleImage}>
                    Elige una imagen
                </button>
            </div>
        </div>
    );
}