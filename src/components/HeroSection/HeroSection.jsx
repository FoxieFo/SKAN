import s from './styles.module.scss'

import HeroSectionImg from './../../assets/images/hero-section-img.svg'
import Button from '../ui/Button/Button';

export default function HeroSection() {
    return (
        <section className={s.herosection__container}>
            <div className={s.herosection__info}>
                <h1 className={s.herosection__infoTitle}>сервис по поиску публикаций о компании по его ИНН</h1>
                <p className={s.herosection__infoText}>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                <Button title={'Запросить данные'} className={s.herosection__infoBtn}></Button>
            </div>
            <img src={HeroSectionImg} alt="" />
        </section>
    );
}