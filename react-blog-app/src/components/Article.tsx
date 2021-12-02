import dateStringifier from "../utils/dateStringifier";

const Article = (props: any) => {
    return (
        <article>
            <hr className="horiz-line" />
            <div className="post-meta-container">
                <img src={props.authorPhoto} alt={`${props.authorName}'s avatar`} className="author-avatar" />
                <div className="author-date-container">
                    <h3 id="author-name">{props.authorName}</h3>
                    <span className="post-date">{dateStringifier(props.postDate)}</span>
                </div>
                <div className="post-likes">
                    <button>❤️ {props.likes}</button>
                </div>
            </div>
            <div>
                <h2>{props.postTitle}</h2>
                <p className="post-text">{props.postText}</p>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" id="read-more-lnk">Read more...</a>
            </div>
        </article>
    )
}

export default Article;
