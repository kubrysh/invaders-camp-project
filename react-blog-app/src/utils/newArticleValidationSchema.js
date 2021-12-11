import * as yup from "yup";

export const newArticleSchema = yup.object().shape({
    firstName: yup.string()
        .min(2, 'First Name is too short!')
        .max(50, 'First Name is too long!')
        .required('First Name is required!'),
    lastName: yup.string()
        .min(2, 'Last Name is too short!')
        .max(50, 'Last Name is too long!')
        .required('Last Name is required!'),
    email: yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    title: yup.string()
        .min(2, 'Title is too short!')
        .max(100, 'Title is too Long!')
        .required('Title is required!'),
    body: yup.string()
        .max(560, 'Article text is too Long!')
        .required('Article text is required!')
});
