import React from 'react';
import s from './Header.module.scss'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className={s.header_container}>
            <header>
                <div className={s.logo_text}>
                    <img src={logo} alt="logo" />
                    <span>Разрабатываем и запускаем <br />
                        сложные веб проекты</span>
                </div>
                <button className={s.enter}>Войти</button>
            </header>
        </div>

    );
};

export default Header;