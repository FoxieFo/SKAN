import s from './styles.module.scss'
import SearchPanel from './../SearchPanel/SearchPanel'
import Hero from './../../assets/images/search-img.svg'
import Document from './../../assets/images/doc-img.svg'
import Folders from './../../assets/images/folders-img.svg'

export default function FindData() {

    return (
        <section className={s.finddata__container}>
            <div className={s.finddata__main}>
                <h2 className={s.finddata__mainHeading}>Найдите необходимые данные в пару кликов</h2>
                <p className={s.finddata__mainText}>Задайте параметры поиска. <br />Чем больше заполните, тем точнее поиск</p>
                <SearchPanel />
            </div>
            <div className={s.finddata__heroes}>
                <img className={s.finddata__heroesHero} src={Hero}/>
                <img className={s.finddata__heroesDocument} src={Document}/>
                <img className={s.finddata__heroesFolders} src={Folders}/>
            </div>
        </section>
    );
}