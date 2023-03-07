import React from 'react';
import s from './MyInput.module.scss'

const MyInput = ({alt, img,  ...props}) => {
    return (

        <div className={s.input_block}>
            <span><img src={img} alt={alt} /></span>
            <input {...props} />
        </div>



    );
};

export default MyInput;