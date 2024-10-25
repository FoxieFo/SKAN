import FindData from '../../components/FindData/FindData';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import s from './styles.module.scss';
import { useSelector } from 'react-redux';

export default function SearchPage() {
    const isAuthenticated = useSelector((state) => state.auth?.isAuth || false);

    return (
        isAuthenticated ? (
            <div className={s.page}>
                <Header />
                <main>
                    <FindData />
                </main>
                <Footer />
            </div>
        ) : (
            <div className={s.page}>
                <Header />
                <main className={s.searchpage__warn}>
                    <p>Пожалуйста, войдите в личный кабинет</p>
                </main>
                <Footer />
            </div>
        )
    );
}