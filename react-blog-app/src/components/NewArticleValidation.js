import * as yup from "yup";

export const newArticleSchema = yup.object().shape({
    userName: yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .trim()
        .required('Name is required!'),
    userEmail: yup.string()
        .email('Invalid email!')
        .trim()
        .required('Email is required!'),
    articleTitle: yup.string()
        .min(2, 'Title is too short!')
        .max(100, 'Title is too Long!')
        .trim()
        .required('Title is required!'),
    articleText: yup.string()
        .max(560, 'Article text is too Long!')
        .trim()
        .required('Article text is required!')
});
