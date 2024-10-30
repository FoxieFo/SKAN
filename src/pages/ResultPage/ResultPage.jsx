import DocList from '../../components/DocList/DocList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import StartResult from '../../components/StartResult/StartResult';
import Summary from '../../components/Summary/Summary';
import s from './styles.module.scss'

export default function ReaultPage() {
    return (
        <>
            <Header />
            <main>
                <StartResult />
                <Summary />
                <DocList />
            </main>
            <Footer />
        </>
    );
}