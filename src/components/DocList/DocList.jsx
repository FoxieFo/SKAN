import s from './styles.module.scss'

export default function DocList() {
    return (
        <section className={s.doclist__container}>
            <h3 className={s.doclist__heading}>Список документов</h3>
            <div></div>
            <button>Показать больше</button>
        </section>
    );
}