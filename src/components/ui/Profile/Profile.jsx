import s from './styles.module.scss'
import ProfilePic from './../../../assets/images/profile.png'

export default function Profile() {
    return (
        <div className={s.profile__container}>
            <div className={s.profile__text}>
                <span className={s.profile__textName}>Алексей А.</span>
                <button className={s.profile__textBtn}>Выйти</button>
            </div>
            <img src={ProfilePic} alt="фото пользователя" />
        </div>
    );
}