import s from './styles.module.scss'
import SummarySlider from './../ui/SummarySlider/SummarySlider'

export default function Summary() {
    return (
        <section className={s.summary__container}>
            <h3 className={s.summary__heading}>Общая сводка</h3>
            <p className={s.summary__text}>Найдено 4 221 вариантов</p>
            <div className={s.summary__slider}>
                <ul className={s.summary__sliderValues}>
                    <li>Период</li>
                    <li>Всего</li>
                    <li>Риски</li>
                </ul>
                <SummarySlider />
            </div>
        </section>
    );
}