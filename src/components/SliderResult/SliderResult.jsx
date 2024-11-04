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

const Slide = ({ date, total, riskFactors }) => (
  <div className={s.slide__container}>
    <div>{date}</div>
    <div>{total}</div>
    <div>{riskFactors}</div>
  </div>
);

const SliderResult = () => {
  const histogram = useSelector(state => state.publications.histogram);
  const histogramLoadedDate = useSelector(state => state.publications.histogramLoadedDate);

  console.log('Histogram data:', histogram);

  if (!histogram.length) {
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
  );
};

export default SliderResult;