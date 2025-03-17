import * as React from "react";

const id = (function* () {
    let i =1;
    while(true){
        yield i++;
    }
})();

export default function MyFeature({addarticle,articlelist})
{
    const[ article , setArticle] = React.useState([
        {id: id.next(), title: "Title 1", summary : "Summary 1" ,display: "none"},
        {id: id.next(), title: "Title 2", summary : "Summary 2" ,display: "none"},
        {id: id.next(), title: "Title 3", summary : "Summary 3" ,display: "none"},

    ]);

    const[title , setTitle] = React.useState("");
    const[summary, setSummary] = React.useState("");

    function onChangeTitle(e)
    {
        setTitle(e.target.value);
    }
    function onChangeSummary(e)
    {
        setSummary(e.target.value);
    }

    /*    */

    function onClickAdd()
    {
        setArticle([...article,{id:id.next(),title:title,summary:summary}]);
        setTitle("");
        setSummary("");
    }

    function onClickRemove()
    {
        setArticle(article.filter((i) => i.id!== id));
    }

    function onClickToggle()
    {
        const index = article.findIndex((i) => i.id === id);
        const updatedArticle = [...article];
        updatedArticle[index] = {
            ...article[index],
            display: article[index].display === " "? "none" : "",
        };
        setArticle(updatedArticle);
    }

    return <section>

        {addarticle ({title,summary,onClickAdd,onChangeSummary,onChangeTitle })}
        {articlelist({ article,onClickRemove,onClickToggle })}

    </section>


}

