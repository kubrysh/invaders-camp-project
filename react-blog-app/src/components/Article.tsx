import { useHistory } from "react-router";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Skeleton from "@mui/material/Skeleton"
import useArticle from "../hooks/useArticle";
import dateStringifier from "../utils/dateStringifier";

const Article = ({ id }:any) => {

    const { article, isLoading, error }:any = useArticle(id);
    const history = useHistory();

    if (error && error.response.status === 404) {
        history.replace("/404");
        return null;
    }
    
    return (
        <Container maxWidth="md" component="section">
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bolder" }}>
                {isLoading ? <Skeleton /> : article.title}
            </Typography>
            <div className="article-meta-container">
                {
                    isLoading ?
                        <Skeleton variant="circular" width={50} height={50} />
                    :
                        <Avatar
                            alt={`${article.author}'s avatar`}
                            src={article.authorPhoto}
                            sx={{ width: 50, height: 50 }}
                        />
                }
                <div className="author-date-container">
                    <Typography variant="h5" component="h3" sx={{ fontWeight: "bolder" }}>
                        {isLoading ? <Skeleton width={170} /> : article.author}
                    </Typography>
                    <Typography variant="subtitle1" component="span">
                        {isLoading ? <Skeleton width={170} /> : dateStringifier(article.date)}
                    </Typography>
                </div>
                <div className="article-likes">
                    {
                        isLoading ||
                        <Button
                            variant="contained"
                            startIcon={<FavoriteIcon />}
                        >
                            {article.likes}
                        </Button>
                    }
                </div>
            </div>
            <div>
                <Typography variant="body1" mt={"1rem"} mb={"2rem"}>
                    {isLoading ? <Skeleton variant="rectangular" height={200} /> : article.body}
                </Typography>
            </div>
        </Container>
    )
}

export default Article;
