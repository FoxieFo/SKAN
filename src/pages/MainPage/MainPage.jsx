import s from './styles.module.scss'
import Header from './../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Plans from '../../components/Plans/Plans';
import Footer from '../../components/Footer/Footer';

export default function MainPage() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <WhyUs />
                <Plans />
            </main>
            <Footer />
        </>
    );
}