import React from 'react';
import cls from './LoginPage.module.scss'

const LoginPage = () => {
    return (
        <div className={cls.loginPage}>
            <h1>Создание профиля</h1>
            <div className={cls.inputs}>
                <input type="text" placeholder={"Имя*"}/>
                <input type="text" placeholder={"Фамилия*"}/>
                <input type="text" placeholder={"Город проживания*"}/>
                <input type="text" placeholder={"Адрес"}/>
            </div>
            <button className={cls.button}>Далее</button>
        </div>
    );
};

export default LoginPage;