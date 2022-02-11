import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useArticles from "../hooks/useArticles";
import dateStringifier from "../utils/dateStringifier";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import React from "react";
import Box from "@mui/material/Box";

const RenderArticle = (props: any) => {
    return (
        <article>
            <div className="article-meta-container">
                {props.isLoading ? (
                    <Skeleton variant="circular" width={50} height={50} />
                ) : (
                    <Avatar
                        alt={`${props.author}'s avatar`}
                        src={props.authorPhoto}
                        sx={{ width: 50, height: 50 }}
                    />
                )}
                <Box ml={"10px"}>
                    {" "}
                    {/* Author - Date Container */}
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: "bolder" }}
                    >
                        {props.isLoading ? (
                            <Skeleton width={170} />
                        ) : (
                            props.author
                        )}
                    </Typography>
                    <Typography variant="subtitle1" component="span">
                        {props.isLoading ? (
                            <Skeleton width={170} />
                        ) : (
                            dateStringifier(props.date)
                        )}
                    </Typography>
                </Box>
                <div className="article-likes">
                    {props.isLoading || (
                        <Button
                            variant="contained"
                            startIcon={<FavoriteIcon />}
                        >
                            {props.likes}
                        </Button>
                    )}
                </div>
            </div>
            <div>
                <Typography
                    variant="h4"
                    component="h2"
                    mt={"1rem"}
                    mb={"0.5rem"}
                >
                    {props.isLoading ? (
                        <Skeleton />
                    ) : (
                        <Link
                            component={RouterLink}
                            to={`/articles/${props.articleId}`}
                            underline="none"
                        >
                            {props.title}
                        </Link>
                    )}
                </Typography>
                <Typography variant="body1" mt={"1rem"} mb={"2rem"}>
                    {props.isLoading ? (
                        <Skeleton variant="rectangular" height={200} />
                    ) : (
                        props.body
                    )}
                </Typography>
                {props.isLoading || (
                    <Link
                        component={RouterLink}
                        to={`/articles/${props.articleId}`}
                        color="inherit"
                        underline="hover"
                        sx={{
                            display: "inline-block",
                            mb: "2em",
                            fontWeight: 500
                        }}
                    >
                        Read more...
                    </Link>
                )}
            </div>
        </article>
    );
};

const Articles = (props: any) => {
    const { articles, isLoading } = useArticles();

    return (
        <>
            {articles.map((article: any) => (
                <React.Fragment key={article.articleId}>
                    <Divider sx={{ mb: "20px" }} />
                    <RenderArticle {...article} isLoading={isLoading} />
                </React.Fragment>
            ))}
        </>
    );
};

export default Articles;
