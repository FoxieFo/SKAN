import HeroRes from './../../assets/images/start-result-hero.svg'
import s from './styles.module.scss'

export default function StartResult() {
    return (
        <section className={s.startresult__container}>
            <div className={s.startresult__text}>
                <h2 className={s.startresult__textHeading}>Ищем. Скоро будут результаты</h2>
                <p className={s.startresult__textItem}>Поиск может занять некоторое время, просим сохранять терпение.</p>
            </div>
            <img className={s.startresult__img} src={HeroRes}/>
        </section>
    );
}