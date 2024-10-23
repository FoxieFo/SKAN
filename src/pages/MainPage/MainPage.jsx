import s from './styles.module.scss'
import Header from './../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection';
import WhyUs from '../../components/WhyUs/WhyUs';

export default function MainPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <WhyUs />
        </>
    );
}