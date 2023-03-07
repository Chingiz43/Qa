import React from 'react';
import s from './Main.module.scss'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SignUp from '../../components/SignUp/SignUp';

const Main = () => {
    return (
        <div className={s.main}>
            <Header/>
            <div className={s.main_content}>
            <SignUp/>
            </div>  
            <Footer/>
        </div>
    );
};

export default Main;