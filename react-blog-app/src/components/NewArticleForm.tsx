import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { newArticleSchema } from "../utils/newArticleValidationSchema";

const baseURL = `${process.env.REACT_APP_API_URL}/api/posts`;

const NewArticleForm = ({ type }:any) => {

    const history = useHistory();
    const location:any = useLocation();

    const handleSubmit = async (values:any) => {
        let regexp = /^\s+|\s+$/g;

        const submitValues:any = Object.keys(values).reduce((result, key) => (
            { ...result, [key]: values[key].replace(regexp, "") }
        ), {});

        try {
            const response = await axios.post(baseURL, submitValues);
            if (response.status === 201) {
                history.push("/newarticle/success", {
                    background: //background for success modal
                        (type === "modal" && location.state.background) //prev location
                            ||
                        (type === "page" && location) //current location
                })
            } else {
                console.log(`Error ${response.status}: ${response.statusText}`);
                history.goBack();
            }
        } catch (e) {
            console.error(e);
            history.goBack();
        }
    }

    return(
        <Formik
            initialValues={{
                authorName: "",
                authorEmail: "",
                postTitle: "",
                postText: ""
            }}
            validationSchema={newArticleSchema}
            onSubmit = {(values:any) => handleSubmit(values)}
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
    )
}

export default NewArticleForm;
