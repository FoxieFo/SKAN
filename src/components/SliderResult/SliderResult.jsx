import s from './styles.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ArrowPrev from "./../../assets/images/icons/arrow-left.png";
import ArrowNext from "./../../assets/images/icons/arrow-right.png";

const NextArrow = ({ className, style, onClick }) => (
  <div className={`${className} ${s.nextArrow}`} style={{ ...style }} onClick={onClick}>
    <img src={ArrowNext} alt="Next" className={s.arrowNext} />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div className={`${className} ${s.prevArrow}`} style={{ ...style }} onClick={onClick}>
    <img src={ArrowPrev} alt="Prev" className={s.arrowPrev} />
  </div>
);

const Slide = ({ date, total, riskFactors }) => {

  const formattedDate = new Date(date).toLocaleDateString("ru-RU");
  return (
    <div className={s.slide__container}>
      <div>{formattedDate}</div>
      <div>{total}</div>
      <div>{riskFactors}</div>
    </div>
  );
};

const SliderResult = () => {
  const histogram = useSelector(state => state.publications.histogram);

  if (!histogram || !histogram.length) {
    return <div>No data available</div>;
  }

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={s.sliderresult__wrapper}>
      <ul className={s.sliderresult__values}>
        <li>Период</li>
        <li>Всего</li>
        <li>Риски</li>
      </ul>
      <div className={s.sliderresult__container}>
        <Slider {...settings}>
          {histogram.map((item, index) => (
            <Slide
              key={index}
              date={item.date}
              total={item.total}
              riskFactors={item.riskFactors}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderResult;