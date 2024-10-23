import s from './styles.module.scss'

export default function SliderCard({img, text}) {
    return (
        <div className={s.slidercard__container}>
            <img className={s.slidercard__img} src={img}/>
            <p className={s.slidercard__text}>{text}</p>
        </div>
    );
}