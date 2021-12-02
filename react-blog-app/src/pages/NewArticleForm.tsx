import { useEffect } from "react";

import { Formik, Form, Field } from 'formik';
import "./NewArticleForm.css";
import { newArticleSchema } from "../utils/NewArticleValidation"

const NewArticleForm = (props:any) => {
    return (
        <div className="popup-background">
            <div className="popup-container">
                <header className="popup-header">
                    <h3>Add a New Article</h3>
                    <button className="close-btn" onClick={() => props.setOpenClosed(false)}>❌</button>
                </header>
                <Formik
                    initialValues={{
                        authorName: "",
                        authorEmail: "",
                        postTitle: "",
                        postText: ""
                    }}
                    validationSchema={newArticleSchema}
                    onSubmit = {(values:any) => {
                        let regexp = /^\s+|\s+$/g;

                        const submitValues:any = Object.keys(values).reduce((result, key) => (
                            { ...result, [key]: values[key].replace(regexp, "") }
                        ), {});

                        fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(submitValues)
                        })
                            .then(
                                (res) => {
                                    props.setOpenClosed(false);
                                    props.setIsSubmitted(true);
                                },
                                (error) => {
                                    props.setOpenClosed(false);
                                    props.setIsSubmitted(false);
                                    console.log(error);
                                }
                            )
                            
                    }}
                >
                    {({ errors, touched, values }) => (
                        <Form className="form-container" noValidate>
                            <label className="label-container">
                                Name:
                                <Field
                                    name="authorName"
                                    className={`${errors.authorName && touched.authorName && "is-warning"}`}
                                    placeholder="Your Name..."
                                    maxLength={50}
                                />
                                {errors.authorName && touched.authorName ? (
                                    <div className="error-message" >{errors.authorName}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                E-Mail:
                                <Field
                                    name="authorEmail"
                                    className={`${errors.authorEmail && touched.authorEmail && "is-warning"}`}
                                    type="email"
                                    placeholder="Your E-Mail..."
                                    maxLength={100}
                                />
                                {errors.authorEmail && touched.authorEmail ? (
                                    <div className="error-message" >{errors.authorEmail}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                Title:
                                <Field
                                    name="postTitle"
                                    className={`${errors.postTitle && touched.postTitle && "is-warning"}`}
                                    placeholder="Your Article Title..."
                                    maxLength={100}
                                />
                                {errors.postTitle && touched.postTitle ? (
                                    <div className="error-message" >{errors.postTitle}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                Article Text: ({560 - values.postText.length} characters)
                                <Field
                                    name="postText"
                                    as="textarea"
                                    className={`text-container ${errors.postText && touched.postText && "is-warning"}`}
                                    placeholder="Your Article Text..."
                                    maxLength={560}
                                />
                                {errors.postText && touched.postText ? (
                                    <div className="error-message" >{errors.postText}</div>
                                ) : null}
                            </label>
                            <button className="submit-btn" type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default NewArticleForm;
