import s from './styles.module.scss'
import RateCard from '../ui/RateCard/RateCard'

import LightBulb from './../../assets/images/icons/light-bulb.svg'
import Target from './../../assets/images/icons/target.svg'
import Laptop from './../../assets/images/icons/laptop.svg'

export default function Plans() {

    const plansData = [
        {
            img: LightBulb,
            title: 'Beginner',
            subtitle: 'Для небольшого исследования',
            price: '799 ₽',
            crossedPrice: '1 200 ₽',
            plan: 'или 150 ₽/мес. при рассрочке на 24 мес.',
            includesHeading: 'В тариф входит:',
            includesItems: [
                'Безлимитная история запросов',
                'Безопасная сделка',
                'Поддержка 24/7'
            ]
        },
        {
            img: Target,
            title: 'Pro',
            subtitle: 'Для HR и фрилансеров',
            price: '1 299 ₽',
            crossedPrice: '2 600 ₽',
            plan: 'или 279 ₽/мес. при рассрочке на 24 мес.',
            includesHeading: 'В тариф входит:',
            includesItems: [
                'Все пункты тарифа Beginner',
                'Экспорт истории',
                'Рекомендации по приоритетам'
            ]
        },
        {
            img: Laptop,
            title: 'Business',
            subtitle: 'Для корпоративных клиентов',
            price: '2 379 ₽',
            crossedPrice: '3 700 ₽',
            plan: 'ㅤ',
            includesHeading: 'В тариф входит:',
            includesItems: [
                'Все пункты тарифа Pro',
                'Безлимитное количество запросов',
                'Приоритетная поддержка'
            ]
        },
    ];

    const headingColors = {
        Beginner: 'headingYellow',
        Pro: 'headingLightBlue',
        Business: 'headingBlack',
    };

    return (
        <section className={s.plans__container}>
            <h3 className={s.plans__title}>наши тарифы</h3>
            <div className={s.plans__options}>
                {plansData.map((rate, index) => (
                    <RateCard
                        key={index}
                        img={rate.img}
                        title={rate.title}
                        subtitle={rate.subtitle}
                        price={rate.price}
                        crossedPrice={rate.crossedPrice}
                        plan={rate.plan}
                        includesHeading={rate.includesHeading}
                        includesItems={rate.includesItems}
                        headingClass={s[headingColors[rate.title]]}
                    />
                ))}
            </div>
        </section>
    );
}

