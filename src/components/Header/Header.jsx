import { Link } from 'react-router-dom';
import s from './styles.module.scss';

import Logo from './../../assets/images/icons/logo.svg';
import Line from './../../assets/images/icons/line.svg';

import Button from './../ui/Button/Button';

export default function Header() {
    return (
        <header className={s.header__container}>
            <Link to="/">
                <img className={s.header__logo} src={Logo} alt="logo" />
            </Link>
            <ul className={s.header__links}>
                <li className={s.header__linksItem}>
                    <Link to="/">Главная</Link>
                </li>
                <li className={s.header__linksItem}>
                    <Link to="/">Тарифы</Link>
                </li>
                <li className={s.header__linksItem}>
                    <Link to="/">FAQ</Link>
                </li>
            </ul>
            <div className={s.header__profile}>
                <div className={s.header__profileLogin}>
                    <span className={s.header__profileLoginReg}>Зарегистрироваться</span>
                    <img className={s.header__line} src={Line} alt="line" />
                    <Link to="/auth">
                        <Button title={'Войти'} colorScheme={'colorScheme__2'} />
                    </Link>
                </div>
            </div>
        </header>
    );
}