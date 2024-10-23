import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AuthForm from '../../components/AuthForm/AuthForm'
import s from './styles.module.scss'

export default function AuthPage() {
    return (
        <>
            <Header />
            <main>
                <AuthForm />
            </main>
            <Footer />
        </>
    );
}