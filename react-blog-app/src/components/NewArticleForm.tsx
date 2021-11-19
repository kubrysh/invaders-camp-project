import { Formik, Form, Field } from 'formik';
import "./NewArticleForm.css";
import { newArticleSchema } from "./NewArticleValidation"

const NewArticleForm = (props:any) => {
    return (
        <div className="popup-background">
            <div className="popup-container">
                <div className="popup-header">
                    <h3>Add a New Article</h3>
                    <button className="close-btn" onClick={() => props.setOpenClosed(false)}>❌</button>
                </div>
                <Formik
                    initialValues={{
                        userName: "",
                        userEmail: "",
                        articleTitle: "",
                        articleText: "",
                    }}
                    validationSchema={newArticleSchema}
                    onSubmit = {(values:any) => {
                        let submitValues = values;
                        let regexp = /^\s+|\s+$/g;

                        Object.keys(submitValues).forEach(key => {
                            submitValues[key] = submitValues[key].replace(regexp, "")
                        })

                        alert(
                            "Author's Name: " + submitValues.userName + "\n" +
                            "Author's E-Mail: " + submitValues.userEmail + "\n" +
                            "Article Title: " + submitValues.articleTitle + "\n" +
                            "Article Text: " + submitValues.articleText
                        )
                    }}
                >
                    {({ errors, touched, values }) => (
                        <Form className="form-container">
                            <label className="label-container">
                                Name:
                                <Field
                                    name="userName"
                                    className={`${errors.userName && touched.userName && "is-warning"}`}
                                    placeholder="Your Name..."
                                    maxLength={50}
                                />
                                {errors.userName && touched.userName ? (
                                    <div className="error-message" >{errors.userName}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                E-Mail:
                                <Field
                                    name="userEmail"
                                    className={`${errors.userEmail && touched.userEmail && "is-warning"}`}
                                    type="email"
                                    placeholder="Your E-Mail..."
                                    maxLength={100}
                                />
                                {errors.userEmail && touched.userEmail ? (
                                    <div className="error-message" >{errors.userEmail}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                Title:
                                <Field
                                    name="articleTitle"
                                    className={`${errors.articleTitle && touched.articleTitle && "is-warning"}`}
                                    placeholder="Your Article Title..."
                                    maxLength={100}
                                />
                                {errors.articleTitle && touched.articleTitle ? (
                                    <div className="error-message" >{errors.articleTitle}</div>
                                ) : null}
                            </label>
                            <label className="label-container">
                                Article Text: ({560 - values.articleText.length} characters)
                                <Field
                                    name="articleText"
                                    as="textarea"
                                    className={`text-container ${errors.articleText && touched.articleText && "is-warning"}`}
                                    placeholder="Your Article Text..."
                                    maxLength={560}
                                />
                                {errors.articleText && touched.articleText ? (
                                    <div className="error-message" >{errors.articleText}</div>
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
