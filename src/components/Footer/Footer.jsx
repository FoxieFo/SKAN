import s from './styles.module.scss'

import FooterLogo from './../../assets/images/icons/footer-logo.svg'

export default function Footer() {
    return (
        <footer className={s.footer__container}>
            <div className={s.footer__content}>
                <img src={FooterLogo} alt="logo" />
                <div className={s.footer__info}>
                    <span>г. Москва, Цветной б-р, 40</span>
                    <span>+7 495 771 21 11</span>
                    <span>info@skan.ru</span>
                    <p>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    );
}