import s from './styles.module.scss'
import HTMLReactParser from "html-react-parser";

// function formatContent(inputMarkup) {
//     let formattedMarkup = inputMarkup.replaceAll("&lt;", "<")
//         .replaceAll("&gt;", ">");

//     formattedMarkup = formattedMarkup.replaceAll("<scandoc>", "<section>")
//         .replaceAll("</scandoc>", "</section>")
//         .replaceAll("<p>", "<span>")
//         .replaceAll("</p>", "</span>")
//         .replaceAll("<sentence>", "<p>")
//         .replaceAll("</sentence>", "</p>")
//         .replaceAll("<entity", "<span")
//         .replaceAll("</entity>", "</span>")
//         .replaceAll("<speech", "<span")
//         .replaceAll("</speech>", "</span>")
//         .replaceAll("<vue", "<span")
//         .replaceAll("</vue>", "</span>")
//         .replaceAll("<br>", "");

//     while (formattedMarkup.includes("<figure>")) {
//         let figureHTML = formattedMarkup.substring(formattedMarkup.indexOf("<figure>"));
//         figureHTML = figureHTML.substring(0, figureHTML.indexOf("</figure>") + "</figure>".length);

//         if (!figureHTML.includes("data-image-src")) {
//             formattedMarkup = formattedMarkup.replace(figureHTML, "");
//             continue;
//         }

//         let url = figureHTML.substring(
//             figureHTML.indexOf("data-image-src") + 'data-image-src="'.length
//         );
//         url = url.substring(0, url.indexOf('"'));

//         formattedMarkup = formattedMarkup.replace(
//             figureHTML,
//             `<img src="${url}" alt="Фото из публикации">`
//         );
//     }

//     while (formattedMarkup.includes("<span></span>")) {
//         formattedMarkup = formattedMarkup.replace("<span></span>", "");
//     }

//     while (formattedMarkup.includes("<p></p>")) {
//         formattedMarkup = formattedMarkup.replace("<p></p>", "");
//     }

//     if (formattedMarkup.length > 1800) {
//         formattedMarkup = formattedMarkup.substring(
//             0,
//             formattedMarkup.lastIndexOf("</p>", 1700) + "</p>".length
//         );
//         formattedMarkup += "...";
//     }

//     return formattedMarkup;
// }

export default function DocCard({ data }) {
    return (
        <article className={s.doccard__container}>
            <div className={s.doccard__heading}>
                <div className={s.doccard__headingDate}></div>
                <a className={s.doccard__headingLink}></a>
            </div>
            <h3 className={s.doccard__title}>{data.title.text}</h3>
            <p className={s.doccard__type}></p>
            <img className={s.doccard__img}/>
            <p className={s.doccard__content}></p>
            <div className={s.doccard__footer}>
                <button className={s.doccard__footerBtn}>Читать в источнике</button>
                <span className={s.doccard__footerCount}>{data.attributes.wordCount}</span>
            </div>
        </article>
    );
}