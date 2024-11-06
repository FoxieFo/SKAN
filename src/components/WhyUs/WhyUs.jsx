import s from './styles.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SliderCard from '../ui/SliderCard/SliderCard';

import HeroWhyUs from './../../assets/images/why-us-img.svg';
import Timer from './../../assets/images/icons/timer.svg';
import Lens from './../../assets/images/icons/lens.svg';
import Lock from './../../assets/images/icons/lock.svg';

export default function WhyUs() {
    const sliderData = [
        { img: Timer, text: 'Высокая и оперативная скорость обработки заявки' },
        { img: Lens, text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' },
        { img: Lock, text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству' },
        { img: Timer, text: 'Высокая и оперативная скорость обработки заявки' },
        { img: Lens, text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос' },
        { img: Lock, text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству' },
    ];

    return (
        <section className={s.whyus__container}>
            <h3 className={s.whyus__title}>Почему именно мы</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                style={{
                    '--swiper-navigation-color': '#A9A9A9',
                    'width': '100%',
                    'padding': '5px 60px',
                }}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={8000}
                modules={[Navigation, Autoplay]}
                centeredSlides={true}
                centeredSlidesBounds={true}
                className='mySwiper'
                breakpoints={{
                    965: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        key={index}
                    >
                        <SliderCard img={slide.img} text={slide.text} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <img className={s.whyus__img} src={HeroWhyUs} />
        </section>
    );
}