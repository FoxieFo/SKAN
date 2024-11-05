import s from './styles.module.scss'

import HeroSectionImg from './../../assets/images/hero-section-img.svg'
import Button from '../ui/Button/Button';
import { useSelector } from 'react-redux';


export default function HeroSection() {
    const isAuthenticated = useSelector((state) => state.auth?.isAuth || false);
    return (
        <section className={s.herosection__container}>
            <div className={s.herosection__info}>
                <h1 className={s.herosection__infoTitle}>сервис по поиску публикаций о компании по его ИНН</h1>
                <p className={s.herosection__infoText}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                <div className={s.herosection__infoBtn}>
                    {isAuthenticated ?
                        <Button title={'Запросить данные'} to="/search"></Button>
                        :
                        ''
                    }
                </div>
            </div>
            <img className={s.herosection__img} src={HeroSectionImg} />
        </section>
    );
}