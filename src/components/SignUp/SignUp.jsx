import React from 'react';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import s from './SignUp.module.scss'
import user from '../../assets/user.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'

const SignUp = () => {
    return (
        <div className={s.signUp_main}>
            <h1>Регистрация</h1>
            <div className={s.inputs_btn}> 
            <MyInput type="text" placeholder='Имя' alt={'user'} img={user}/>
            <MyInput type="email" placeholder='E-mail' alt={'email'} img={email}/>
            <MyInput type="password" placeholder='Пароль' alt={'password'} img={password}/>
            <span>{}</span>
            <MyButton>Создать аккаунт</MyButton>
            </div>
        </div>
    );
};

export default SignUp;


//node app.js
