export default function AddArticale({
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
})

{
    return (
        <>
            <section>
                <input type="text" value={title} onChange={onChangeTitle}/>
                <input type="text" value={summary} onChange={onChangeSummary}/>
                <button onClick={onClickAdd}> Add</button>
            </section>

        </>
    );
}
