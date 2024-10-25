import { Link } from 'react-router-dom';
import s from './styles.module.scss';

export default function Button({ title, colorScheme = 'colorScheme__1', className, to }) {
    return (
        <Link to={to} className={`${s.button} ${s[colorScheme]} ${className}`}>
            {title}
        </Link>
    );
}