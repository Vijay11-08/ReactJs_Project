import ArticaleItem from "./Artical_Item";

export default function ArticaleList(article,onClickToggle,onClickRemove){
    return(
        <ul>
            {
                article.map((article) => (
                    <ArticaleItem
                        key={article.id}
                        article={article}
                        onClickToggle={onClickToggle}
                        onClickRemove={onClickRemove}
                    />
                ))
            }
        </ul>

    );
}