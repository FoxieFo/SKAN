import { useEffect, useState } from 'react';
import s from './styles.module.scss'
import api from './../../../http'
import spinner from './../../../assets/images/icons/spinner.svg'

export default function CompanyCount() {
    const [loading, setLoading] = useState(true);
    const [companyInfo, setCompanyInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanyInfo = async () => {
            try {
                const response = await api.get('/api/v1/account/info');
                setCompanyInfo(response.data.eventFiltersInfo);
            } catch (err) {
                setError('Не удалось загрузить данные');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanyInfo();
    }, []);

    if (loading) {
        return <div className={s.loader}><img className={s.loaderSpinner} src={spinner} alt="Loading..." /></div>;
    }

    if (error) {
        return <div className={s.error}>{error}</div>;
    }
    return (
        <div className={s.companyсount__container}>
            <p className={s.companyсount__text}>Использовано компаний: <span className={s.companyсount__textBlack}>{companyInfo.usedCompanyCount}</span></p>
            <p className={s.companyсount__text}>Лимит по компаниями: <span className={s.companyсount__textGreen}>{companyInfo.companyLimit}</span></p>
        </div>
    );
}