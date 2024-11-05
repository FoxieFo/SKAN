import s from './styles.module.scss';
import { useSelector } from "react-redux";
import DocCard from './../ui/DocCard/DocCard';
import { useState, useEffect } from 'react';
import PostService from './../../services/PostService';

export default function DocList() {
    const publicationsList = useSelector(state => state.publications.publicationsList);
    const allPublications = publicationsList && publicationsList.length
        ? publicationsList
        : JSON.parse(localStorage.getItem("publicationsList")) || [];

    console.log("allPublications:", allPublications);

    const [loadedDocs, setLoadedDocs] = useState([]);
    const [error, setError] = useState(false);
    const [showCard, setShowCard] = useState(2);

    function fetchDocuments(indexOf, count = 10) {
        if (indexOf >= allPublications.length) {
            return;
        }

        PostService.getDocuments(allPublications.slice(indexOf, indexOf + count).map(x => x.encodedId))
            .then(response => {
                console.log(response);
                setLoadedDocs(prevDocs => [...prevDocs, ...response.data]);
                setError(false);
            })
            .catch(() => {
                setLoadedDocs([]);
                setError(true);
            });
    }

    useEffect(() => {
        fetchDocuments(0, showCard);
    }, []);

    const handleShowMore = () => {
        setShowCard(prev => prev + 1);
        fetchDocuments(showCard, 1);
    };

    return (
        <section className={s.doclist__container}>
            <h3 className={s.doclist__heading}>Список документов</h3>
            <div className={s.doclist__articles}>
                {loadedDocs.map((item) => (
                    <DocCard key={item.ok.id} data={item.ok} />
                ))}
            </div>
            <button className={s.doclist__btn} onClick={handleShowMore}>Показать больше</button>
            {error && <p>Произошла ошибка при загрузке документов.</p>}
        </section>
    );
}