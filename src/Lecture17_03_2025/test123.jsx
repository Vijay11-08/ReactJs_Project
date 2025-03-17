import ArticaleList from "./Article_List"; // work as view
import AddArticale from "./Add_Artical";  // work as view
import MyFeature from "./myfeature";  // work as conroller

export default function MyExtraFunction(){
    return( <>
        <MyFeature addarticle={({ title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd}) => (
    <AddArticale
            title={ title }
            summary={ summary }
            onChangeTitle={ onChangeTitle }
            onChangeSummary={ onChangeSummary }
            onClickAdd={ onClickAdd }
    />
        )}

        articlelist={ ({article,onClickToggle,onClickRemove}) => (
            <ArticaleList
            article={article}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
            />
        )}
/>
    </>
    );
}