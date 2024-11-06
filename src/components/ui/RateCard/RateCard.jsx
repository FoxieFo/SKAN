import s from './styles.module.scss'

import Button from './../Button/Button'

import Tick from './../../../assets/images/icons/tick.svg'

export default function RateCard({ img, title, subtitle, price, crossedPrice, plan, includesHeading, includesItems, headingClass }) {
    return (
        <div className={s.ratecard__container}>
            <div className={`${s.ratecard__heading} ${headingClass}`}>
                <div className={s.ratecard__headingText}>
                    <div className={s.ratecard__headingTitle}>
                        {title}
                    </div>
                    <div className={s.ratecard__headingSubtitle}>
                        {subtitle}
                    </div>
                </div>
                <img className={s.ratecard__headingImg} src={img} alt="icon" />
            </div>
            <div className={s.ratecard__body}>
                <div className={s.ratecard__prices}>
                    <span className={s.ratecard__price}>
                        {price}
                    </span>
                    <span className={s.ratecard__priceCrossed}>
                        <s>{crossedPrice}</s>
                    </span>
                    <p className={s.ratecard__plan}>{plan}</p>
                </div>
                <div className={s.ratecard__includes}>
                    <h6 className={s.ratecard__includesHeading}>{includesHeading}</h6>
                    <ul className={s.ratecard__includesList}>
                        {includesItems.map((item, index) => (
                            <li key={index} className={s.ratecard__includesListItem}>
                                <img src={Tick} alt="tick" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <Button title={'Подробнее'} className={s.btn}/>
            </div>
        </div>
    );
}