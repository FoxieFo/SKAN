import { useState, useRef, useEffect } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import s from './styles.module.scss';

export default function Dropdown({ title, subtitle, onSelect, calendar, options = [], className, hasError = false, startDate, endDate }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        if (onSelect) {
            onSelect(option);
        }
        setIsOpen(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsOpen(false);
        if (onSelect) {
            onSelect(date);
        }
    };

    return (
        <div className={`${s.dropdown} ${className} ${isOpen ? s.active : ''}`} ref={dropdownRef}>
            <div
                className={`${s.dropdown__toggle} ${hasError ? s.errorBorder : ''}`}
                onClick={toggleDropdown}
            >
                <span className={s.dropdown__toggleText}>
                    {selectedOption ? selectedOption : selectedDate ? selectedDate.toLocaleDateString() : title}
                </span>
                <div className={s.arrow}></div>
            </div>
            {isOpen && (
                <div className={`${s.dropdown__menu} ${isOpen ? s.dropdown__menu_active : ''}`}>
                    {calendar ? (
                        <CalendarComponent
                            onChange={handleDateChange}
                            value={selectedDate}
                            minDate={startDate}
                            maxDate={endDate}
                            className={s.calendarComponent}
                        />
                    ) : (
                        <div>
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    className={s.dropdown__item}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            <div className={s.dropdown__subtitle}>{subtitle}</div>
        </div>
    );
}