import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useWindowWidth from './../../hooks/useWindowWidth';

import s from './styles.module.scss';

import Logo from './../../assets/images/icons/logo.svg';
import Line from './../../assets/images/icons/line.svg';

import Button from './../ui/Button/Button';
import Profile from './../ui/Profile/Profile'
import CompanyCount from '../ui/CompanyCount/CompnayCount';

export default function Header() {
    const isAuthenticated = useSelector((state) => state.auth?.isAuth || false);
    const windowWidth = useWindowWidth();

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
            {isAuthenticated ? (
                    windowWidth < 840 ? (
                        <div className={s.header__profileLoggedinBurger}>
                            <CompanyCount />
                            <div className={s.burger}></div>
                        </div>
                    ) : (
                        <div className={s.header__profileLoggedin}>
                            <CompanyCount />
                            <Profile />
                        </div>
                    )
                ) : (
                    <div className={s.header__profileLogin}>
                        <span className={s.header__profileLoginReg}>Зарегистрироваться</span>
                        <img className={s.header__line} src={Line} alt="line" />
                        <Link>
                            <Button title={'Войти'} colorScheme={'colorScheme__2'} to={'/auth'}/>
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}