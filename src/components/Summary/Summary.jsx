import s from './styles.module.scss'
import SliderResult from './../SliderResult/SliderResult'

export default function Summary() {
    return (
        <section className={s.summary__container}>
            <h3 className={s.summary__heading}>Общая сводка</h3>
            <p className={s.summary__text}>Найдено 4 221 вариантов</p>
            <SliderResult />
        </section>
    );
}