import { useEffect, useRef, useState } from 'react';
import s from './styles.module.scss'
import Google from './../../assets/images/icons/google.svg'
import Facebook from './../../assets/images/icons/facebook.svg'
import Yandex from './../../assets/images/icons/yandex.svg'
import Padlock from './../../assets/images/padlock.svg'
import Heroes from './../../assets/images/auth-img.svg'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../store/actions";
import LoginService from './../../services/LoginService'

export default function AuthForm() {
    const loginBtnRef = useRef();
    const passwordInputRef = useRef();

    const [loginData, setLoginData] = useState("");
    const [passData, setPassData] = useState("");
    const [isLoginError, setIsLoginError] = useState(false);
    const [isPassError, setIsPassError] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onPasswordChange = (event) => {
        setPassData(event.target.value);
        setIsPassError(!event.target.value);
    };

    const onLoginChange = (event) => {
        setLoginData(event.target.value);
        setIsLoginError(!event.target.value);
    };

    const validate = () => {
        setIsCompleted(!isLoginError && !isPassError && loginData && passData);
    }

    useEffect(validate);

    async function onLoginClick() {
        loginBtnRef.current.disabled = true;
    
        try {
            const response = await LoginService.login(loginData, passData);
            dispatch(setAuth(true));
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            navigate("/");
        } catch (error) {
            setIsLoginError(true)
            setIsPassError(true);
        } finally {
            loginBtnRef.current.disabled = false;
        }
    }

    const onLoginKeyDown = (event) => {
        if (event.code === "Enter")
            passwordInputRef.current.focus();
    }

    const onPasswordKeyDown = (event) => {
        if (event.code === "Enter")
            onLoginClick();
    }

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
                    <button className={s.authform__formBtnRegister} disabled>Зарегистрироваться</button>
                </div>

                <form className={s.authform__formInputs}>
                    <label htmlFor="login" className={s.authform__formInputsLabel}>Логин или номер телефона:</label>
                    <input
                        id="login"
                        type="text"
                        className={`${s.authform__formInputsItem} ${isLoginError ? s.authform__formInputsItemError : ''}`}
                        onChange={onLoginChange}
                        pattern="[A-Za-zА-Яа-яЁё][0-9]{5,10}"
                        maxLength={25}
                        autoComplete="on"
                        onKeyDown={onLoginKeyDown}
                        required
                        tabIndex={1}
                    />
                    {isLoginError && <span className={s.authform__formInputsError}>Введите корректные данные</span>}

                    <label htmlFor="password" className={s.authform__formInputsLabel}>Пароль:</label>
                    <input
                        id="password"
                        type="password"
                        className={`${s.authform__formInputsItem} ${isPassError ? s.authform__formInputsItemError : ''}`}
                        onChange={onPasswordChange}
                        maxLength={25}
                        autoComplete="on"
                        ref={passwordInputRef}
                        onKeyDown={onPasswordKeyDown}
                        required
                        tabIndex={2}
                    />
                    {isPassError && <span className={s.authform__formInputsErrorPassword}>Неправильный пароль</span>}

                    <button className={s.authform__formSubmit} ref={loginBtnRef} onClick={onLoginClick} disabled={!isCompleted}>Войти</button>
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
