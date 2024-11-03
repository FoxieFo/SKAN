import DropDown from '../ui/DropDown/DropDown';
import s from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import PostService from '../../services/PostService';
import { useEffect, useRef, useState } from 'react';
import { setHistogram, setHistogramDate, setPostsList } from './../../store/actions';

export default function SearchPanel() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ton = ['Любая', 'Позитивная', 'Негативная'];

    const docsCountRef = useRef();
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
    const [hasErrorDropdown, setHasErrorDropdown] = useState(false);
    const searchBtnRef = useRef();
    const tonality = selectedTonality;

    async function handleSearch() {
        const inn = document.getElementById("inn").value;
        const tonality = selectedTonality.value;
        const limit = docsCountRef.current.value;

        searchBtnRef.current.disabled = true;

        dispatch(setHistogramDate(undefined));
        dispatch(setPostsList(undefined));
        navigate("/results");

        await PostService.getHistograms(inn, tonality, limit,
            startDate, endDate)
            .then(response => {
                dispatch(setHistogram(response));
            })
            .catch(response => {
                console.log("Error. " + JSON.stringify(response));
            });

        await PostService.getPostsList(inn, tonality, limit,
            startDate, endDate)
            .then(response => {
                dispatch(setPostsList(response.data.items));
            })
            .catch(response => {
                console.log("Error. " + JSON.stringify(response))
            });
    }

    const handleStartDateSelect = (date) => {
        if (endDate && date > endDate) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dates: 'Дата начала не может быть позже даты конца',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dates: '',
            }));
            setStartDate(date);
        }
    };

    const handleEndDateSelect = (date) => {
        if (startDate && date < startDate) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dates: 'Дата конца не может быть раньше даты начала',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                dates: '',
            }));
            setEndDate(date);
        }
    };

    return (
        <div className={s.searchpanel__container}>
            <div className={s.searchpanel__inputs}>
                <div className={s.searchpanel__inputsItem}>
                    <label className={`${s.searchpanel__inputsItemLabel} ${errors.inn ? s.errorLabel : ''}`} htmlFor='inn'>
                        ИНН компании <span>*</span>
                    </label>
                    <input
                        className={`${s.searchpanel__inputsItemInput} ${errors.inn ? s.error : ''}`}
                        id='inn'
                        type="text"
                        placeholder='10 цифр'
                        maxLength={10}
                        value={inn}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setInn(value);
                            }
                        }}
                    />
                    {errors.inn && (
                        <input
                            className={s.errorText}
                            value={errors.inn}
                            onChange={(e) => setErrors((prev) => ({ ...prev, inn: e.target.value }))} />
                    )}
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={s.searchpanel__inputsItemLabel} htmlFor='tonality'>
                        Тональность
                    </label>
                    <DropDown
                        title={'Выберите тональность'}
                        options={ton}
                        onSelect={(option) => setSelectedTonality(option)}
                    />
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={`${s.searchpanel__inputsItemLabel} ${errors.quantity ? s.errorLabel : ''}`} htmlFor='quantity'>
                        Количество документов в выдаче <span>*</span>
                    </label>
                    <input
                        ref={docsCountRef}
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
                            onChange={(e) => setErrors((prev) => ({ ...prev, quantity: e.target.value }))} />
                    )}
                </div>
                <div className={s.searchpanel__inputsItem}>
                    <label className={`${s.searchpanel__inputsItemLabel} ${errors.dates ? s.errorLabel : ''}`}>
                        Диапазон поиска <span>*</span>
                    </label>
                    <div className={s.searchpanel__inputsItemCalendar}>
                        <DropDown
                            title={'Дата начала'}
                            calendar={true}
                            onSelect={handleStartDateSelect}
                            hasError={hasErrorDropdown}
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DropDown
                            title={'Дата конца'}
                            calendar={true}
                            onSelect={handleEndDateSelect}
                            hasError={hasErrorDropdown}
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </div>
                    {errors.dates && (
                        <input
                            className={s.errorText}
                            value={errors.dates}
                            onChange={(e) => setErrors((prev) => ({ ...prev, dates: e.target.value }))} />
                    )}
                </div>
            </div>
            <div className={s.searchpanel__checkboxes}>
                <div className={s.searchpanel__checkboxesList}>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Признак максимальной полноты</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Упоминания в бизнес-контексте</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Главная роль в публикации</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Публикации только с риск-факторами</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать технические новости рынков</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать анонсы и календари</p>
                    </label>
                    <label className={s.searchpanel__checkboxesListItem}>
                        <input type="checkbox" className={s.searchpanel__checkboxesListItemCheckbox} disabled />
                        <p className={s.searchpanel__checkboxesListItemName} >Включать сводки новостей</p>
                    </label>
                </div>
                <div className={s.searchpanel__checkboxesSend}>
                    <button className={s.searchpanel__checkboxesSendBtn} onClick={handleSearch} ref={searchBtnRef}>
                        Искать
                    </button>
                </div>
            </div>
        </div>
    );
}
