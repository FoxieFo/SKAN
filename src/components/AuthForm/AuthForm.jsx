import { useEffect, useRef, useState } from 'react';
import s from './styles.module.scss'
import Google from './../../assets/images/icons/google.svg'
import Facebook from './../../assets/images/icons/facebook.svg'
import Yandex from './../../assets/images/icons/yandex.svg'
import Padlock from './../../assets/images/padlock.svg'
import Heroes from './../../assets/images/auth-img.svg'
import { useDispatch } from "react-redux";

export default function AuthForm() {
    return (
        <section className={s.authform__container}>
            <div className={s.authform__info}>
                <p className={s.authform__infoText}>Для оформления подписки на тариф, необходимо авторизоваться.</p>
                <img src={Heroes} alt="heroes" />
            </div>
            <div className={s.authform__form}>
                <div className={s.authform__buttons}>
                    <button>Войти</button>
                    <button>Зарегистрироваться</button>
                </div>
                <form className={s.authform__inputs}></form>
            </div>
        </section>
    );
}