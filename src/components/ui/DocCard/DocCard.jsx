import s from './styles.module.scss';
import HTMLReactParser from "html-react-parser";
import articleImg from './../../../assets/images/article-img.png';

function formatContent(inputMarkup) {
    let formattedMarkup = inputMarkup
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll("<scandoc>", "<section>")
        .replaceAll("</scandoc>", "</section>")
        .replaceAll("<p>", "<span>")
        .replaceAll("</p>", "</span>")
        .replaceAll("<sentence>", "<p>")
        .replaceAll("</sentence>", "</p>")
        .replaceAll("<entity", "<span")
        .replaceAll("</entity>", "</span>")
        .replaceAll("<speech", "<span")
        .replaceAll("</speech>", "</span>")
        .replaceAll("<vue", "<span")
        .replaceAll("</vue>", "</span>")
        .replaceAll("<br>", "");

    // Replace <figure> elements containing images with <img> elements or remove them if missing src
    formattedMarkup = formattedMarkup.replace(/<figure>(.*?)<\/figure>/g, (match) => {
        const srcMatch = match.match(/data-image-src="([^"]+)"/);
        return srcMatch ? `<img src="${srcMatch[1]}" alt="Фото из публикации">` : "";
    });

    // Remove empty <span> and <p> elements
    formattedMarkup = formattedMarkup.replace(/<span><\/span>|<p><\/p>/g, "");

    // Limit content length and add ellipsis if it exceeds 1800 characters
    if (formattedMarkup.length > 1800) {
        formattedMarkup = formattedMarkup.slice(0, formattedMarkup.lastIndexOf("</p>", 1700) + 4) + "...";
    }

    return formattedMarkup;
}

export default function DocCard({ data }) {
    const formattedText = HTMLReactParser(formatContent(data.content.markup), { replace: "text/xml" });
    const typeText = data.attributes.isTechNews
        ? "Техновости"
        : data.attributes.isAnnouncement
        ? "Анонсы и события"
        : data.attributes.isDigest
        ? "Сводки новостей"
        : "Общие новости";

    const imageSrc = data.content.markup.match(/<img src="([^"]+)"/)?.[1] || articleImg;

    return (
        <article className={s.doccard__container}>
            <div className={s.doccard__heading}>
                <div className={s.doccard__headingDate}>{new Date(data.issueDate).toLocaleDateString()}</div>
                <a href={data.url} target="_blank" rel="noreferrer" className={s.doccard__headingLink}>
                    <span className={s.doccard__headingLinkSource}>{data.source.name}</span>
                </a>
            </div>
            <h3 className={s.doccard__title}>
                {data.title.text.length > 60 ? `${data.title.text.slice(0, 60)}...` : data.title.text}
            </h3>
            <p className={s.doccard__type}>{typeText}</p>
            <img
                className={s.doccard__img}
                src={imageSrc}
                alt="Фото из публикации"
                onError={(e) => { e.target.onerror = null; e.target.src = articleImg; }}
            />
            <p className={s.doccard__content}>{formattedText}</p>
            <div className={s.doccard__footer}>
                <button className={s.doccard__footerBtn}>
                    <a href={data.url} target="_blank" rel="noreferrer">Читать в источнике</a>
                </button>
                <span className={s.doccard__footerCount}>{data.attributes.wordCount} слов</span>
            </div>
        </article>
    );
}