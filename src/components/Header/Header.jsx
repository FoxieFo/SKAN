import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useWindowWidth from './../../hooks/useWindowWidth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import s from './styles.module.scss';

import Logo from './../../assets/images/icons/logo.svg';
import LogoBurger from './../../assets/images/icons/logo-burger.svg'
import Line from './../../assets/images/icons/line.svg';
import CloseIcon from './../../assets/images/icons/close-burger.svg'

import ButtonCstm from './../ui/Button/Button';
import Profile from './../ui/Profile/Profile';
import CompanyCount from '../ui/CompanyCount/CompnayCount';

export default function Header() {
    const isAuthenticated = useSelector((state) => state.auth?.isAuth || false);
    const windowWidth = useWindowWidth();

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

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
                        <div className={s.header__profileLoggedin}>
                            <CompanyCount />
                            <div className={s.header__hamburger}>
                                <Button variant="primary" onClick={handleShow}>
                                    <div className={s.header__hamburgerLines}>
                                        <span className={s.header__hamburgerLinesLine}></span>
                                        <span className={s.header__hamburgerLinesLine}></span>
                                        <span className={s.header__hamburgerLinesLine}></span>
                                    </div>
                                </Button>
                                <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
                                    <div className={s.header__hamburgerOffcanvas}>
                                        <Offcanvas.Header closeButton>
                                            <img src={LogoBurger} alt="logo" />
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <ul className={s.header__hamburgerOffcanvasOptions}>
                                                <li className={s.header__hamburgerOffcanvasOptionsOption}>
                                                    <Link to="/">Главная</Link>
                                                </li>
                                                <li className={s.header__hamburgerOffcanvasOptionsOption}>
                                                    <Link to="/">Тарифы</Link>
                                                </li>
                                                <li className={s.header__hamburgerOffcanvasOptionsOption}>
                                                    <Link to="/">FAQ</Link>
                                                </li>
                                            </ul>


                                        </Offcanvas.Body>
                                    </div>
                                </Offcanvas>
                            </div>
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
                            <ButtonCstm title={'Войти'} colorScheme={'colorScheme__2'} to={'/auth'} />
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}