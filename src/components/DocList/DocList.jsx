import s from './styles.module.scss'
import { useSelector } from "react-redux";
import DocCard from './../ui/DocCard/DocCard'
import { useState } from 'react';

export default function DocList() {
    const publicationsList = useSelector(state => state.publications.publicationsList);
    const allPublications = publicationsList && publicationsList.length
        ? publicationsList
        : JSON.parse(localStorage.getItem("publicationsList")) || [];

    console.log("allPublications:", allPublications);

    const [showCard, setShowCard] = useState(1);

    return (
        <section className={s.doclist__container}>
            <h3 className={s.doclist__heading}>Список документов</h3>
            <div>
                {allPublications.slice(0, showCard).map((item) => (
                    <DocCard key={item.id} data={item} />
                ))}
            </div>
            <button onClick={() => setShowCard((prev) => prev + 1)}>Показать больше</button>
        </section>
    );
}