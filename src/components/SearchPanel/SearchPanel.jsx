import DropDown from '../ui/DropDown/DropDown';
import s from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPanel() {
    const ton = ['Любая', 'Позитивная', 'Негативная'];

    const [inn, setInn] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedTonality, setSelectedTonality] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errors, setErrors] = useState({
        inn: '',
        quantity: '',
        dates: '',
    });

    const navigate = useNavigate();

    const handleSearch = () => {
        let newErrors = { inn: '', quantity: '', dates: '' };
        let isValid = true;

        if (!inn) {
            newErrors.inn = 'Введите корректные данные';
            isValid = false;
        }

        if (!quantity) {
            newErrors.quantity = 'Обязательное поле';
            isValid = false;
        }

        if (!startDate || !endDate) {
            newErrors.dates = 'Введите корректные данные';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            navigate('/results');
        }
    };

    return (
        <div className={s.searchpanel__container}>
            <div className={s.searchpanel__inputs}>
                <div className={s.searchpanel__inputsItem}>
                    <label className={errors.inn ? s.searchpanel__inputsItemLabelError : s.searchpanel__inputsItemLabel} htmlFor='inn'>ИНН компании *</label>
                    <input
                        className={`${s.searchpanel__inputsItemInput} ${errors.inn ? s.error : ''}`}
                        id='inn'
                        type="text"
                        placeholder='10 цифр'
                        maxLength={10}
                        value={inn}
                        onChange={(e) => setInn(e.target.value)}
                    />
                    {errors.inn && (
                        <input
                            className={s.errorText}
                            value={errors.inn}
                            onChange={(e) => setErrors((prev) => ({ ...prev, inn: e.target.value }))}
                        />
                    )}
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='tonality'>Тональность</label>
                    <DropDown
                        title={'Выберите тональность'}
                        options={ton}
                        onSelect={(option) => setSelectedTonality(option)}
                    />
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={errors.quantity ? s.searchpanel__inputsItemLabelError : s.searchpanel__inputsItemLabel} htmlFor='quantity'>Количество документов в выдаче *</label>
                    <input
                        className={`${s.searchpanel__inputsItemInput} ${errors.quantity ? s.error : ''}`}
                        id='quantity'
                        type="text"
                        placeholder='От 1 до 1000'
                        value={quantity}
                        onChange={(e) => {
                            const value = e.target.value;
                            e.target.value = Math.max(1, Math.min(1000, Number(value))) || "";
                            setQuantity(e.target.value);
                        }}
                    />
                    {errors.quantity && (
                        <input
                            className={s.errorText}
                            value={errors.quantity}
                            onChange={(e) => setErrors((prev) => ({ ...prev, quantity: e.target.value }))}
                        />
                    )}
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel}>Диапазон поиска *</label>
                    <div className={s.searchpanel__inputsItemCalendar}>
                        <DropDown
                            title={'Дата начала'}
                            calendar={true}
                            onSelect={(date) => {
                                setStartDate(date);
                                setErrors((prev) => ({ ...prev, dates: '' })); // Сбрасываем ошибку при выборе даты
                            }}
                        />
                        <DropDown
                            title={'Дата конца'}
                            calendar={true}
                            onSelect={(date) => {
                                setEndDate(date);
                                setErrors((prev) => ({ ...prev, dates: '' })); // Сбрасываем ошибку при выборе даты
                            }}
                        />
                    </div>
                    {errors.dates && (
                        <input
                            className={s.errorText}
                            value={errors.dates}
                            onChange={(e) => setErrors((prev) => ({ ...prev, dates: e.target.value }))}
                        />
                    )}
                </div>
            </div>
            <div className={s.searchpanel__checkboxes}>
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
                </div>
                <div className={s.searchpanel__checkboxesSend}>
                    <button className={s.searchpanel__checkboxesSendBtn} onClick={handleSearch}>
                        Поиск
                    </button>
                    <span className={s.searchpanel__checkboxesSendImportant}>* Обязательные к заполнению поля</span>
                </div>
            </div>
        </div>
    );
}
