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
                <p className={s.authform__infoText}>
                    Для оформления подписки на тариф, необходимо авторизоваться.
                </p>
                <img src={Heroes} alt="heroes" className={s.authform__heroesImg} />
            </div>

            <div className={s.authform__form}>
                <div className={s.authform__formBtn}>
                    <button className={s.authform__formBtnLogin}>Войти</button>
                    <button className={s.authform__formBtnRegister}>Зарегистрироваться</button>
                </div>

                <form className={s.authform__formInputs}>
                    <label htmlFor="login" className={s.authform__formInputsLabel}>Логин или номер телефона:</label>
                    <input
                        id="login"
                        type="text"
                        className={s.authform__formInputsItem}
                        placeholder="Введите логин или телефон"
                    />

                    <label htmlFor="password" className={s.authform__formInputsLabel}>Пароль:</label>
                    <input
                        id="password"
                        type="password"
                        className={s.authform__formInputsItem}
                        placeholder="Введите пароль"
                    />

                    <button type="submit" className={s.authform__formSubmit}>Войти</button>
                </form>

                <button className={s.authform__formRecover}>Восстановить пароль</button>

                <div className={s.authform__formSocial}>
                    <span className={s.authform__formSocialLabel}>Войти через:</span>
                    <div className={s.authform__formSocialIcons}>
                        <img src={Google} alt="Google" className={s.authform__formSocialIconsItem} />
                        <img src={Facebook} alt="Facebook" className={s.authform__formSocialIconsItem} />
                        <img src={Yandex} alt="Yandex" className={s.authform__formSocialIconsItem} />
                    </div>
                </div>

                <img src={Padlock} alt="Padlock" className={s.authform__img} />
            </div>
        </section>
    );
}