import Articles from "../components/Articles";

const MainPage = (props:any) => {
    return(
        <main className="main-container">
            <section className="main-column">
                <Articles isNewArticleSubmitted={props.isNewArticleSubmitted} />
            </section>
            <aside className="aside-column">
                <div className="sidebar-container">
                    <h2>Popular Tags</h2>
                    <p>No tags are here...yet</p>
                </div>
            </aside>
        </main>
    )
}

export default MainPage;
