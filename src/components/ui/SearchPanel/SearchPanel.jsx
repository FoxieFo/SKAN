import s from './styles.module.scss'

export default function SearchPanel() {
    const options = [
        'Любая', 'Негативная', 'Позитивная'
    ];
    const defaultOption = options[0];

    return (
        <div className={s.searchpanel__container}>
            <div className={s.searchpanel__inputs}>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='inn'>ИНН компании *</label>
                    <input className={s.searchpanel__inputsItemInput} id='inn' type="text" placeholder='10 цифр' />
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='tonality'>Тональность</label>
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='cuantity'>Количество документов в выдаче *</label>
                    <input className={s.searchpanel__inputsItemInput} id='cuantity' type="text" placeholder='От 1 до 1000' />
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='ton'>Диапазон поиска *</label>
                    <input className={s.searchpanel__inputsItemInput} id='ton' type="text" placeholder='12' />
                </div>
            </div>
            <div className={s.searchpanel__checkboxes}>
                <div className={s.searchpanel__checkboxesList}>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Признак максимальной полноты</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Упоминания в бизнес-контексте</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Главная роль в публикации</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Публикации только с риск-факторами</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать технические новости рынков</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать анонсы и календари</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать сводки новостей</p>
                    </label>
                </div>
                <div className={s.searchpanel__checkboxesSend}>
                    <button className={s.searchpanel__checkboxesSendBtn}>Поиск</button>
                    <span className={s.searchpanel__checkboxesSendImportant}>* Обязательные к заполнению поля</span>
                </div>
            </div>
        </div>
    );
}