export default function ArticaleItem(article,onClickToggle,onClickRemove){
    return (
        <li>
            <a href={`#${article.id}`} onClick={onClickToggle.bind(null,article.id)} >
                <h2>{article.title}</h2>
            </a>{" "}

            <a href={`#${article.id}`} onClick={onClickRemove.bind(null,article.id)} >
                <h2>Remove</h2>
            </a>

            <p style={{display : article.display}}>{article.summary}</p>
        </li>
    );
}