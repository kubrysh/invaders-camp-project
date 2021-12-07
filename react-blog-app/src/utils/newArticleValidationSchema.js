import * as yup from "yup";

export const newArticleSchema = yup.object().shape({
    authorName: yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Name is required!'),
    authorEmail: yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    articleTitle: yup.string()
        .min(2, 'Title is too short!')
        .max(100, 'Title is too Long!')
        .required('Title is required!'),
    articleText: yup.string()
        .max(560, 'Article text is too Long!')
        .required('Article text is required!')
});
