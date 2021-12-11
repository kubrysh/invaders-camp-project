import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { newArticleSchema } from "../utils/newArticleValidationSchema";

const baseURL = `${process.env.REACT_APP_API_URL}/api/articles`;

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
                firstName: "",
                lastName: "",
                email: "",
                title: "",
                body: ""
            }}
            validationSchema={newArticleSchema}
            onSubmit = {(values:any) => handleSubmit(values)}
        >
            {({ errors, touched, values }) => (
                <Form className="form-container" noValidate>
                    <label className="label-container">
                        First Name:
                        <Field
                            name="firstName"
                            className={`${errors.firstName && touched.firstName && "is-warning"}`}
                            placeholder="Your First Name..."
                            maxLength={50}
                        />
                        {errors.firstName && touched.firstName ? (
                            <div className="error-message" >{errors.firstName}</div>
                        ) : null}
                    </label>
                    <label className="label-container">
                        Last Name:
                        <Field
                            name="lastName"
                            className={`${errors.lastName && touched.lastName && "is-warning"}`}
                            placeholder="Your Last Name..."
                            maxLength={50}
                        />
                        {errors.lastName && touched.lastName ? (
                            <div className="error-message" >{errors.lastName}</div>
                        ) : null}
                    </label>
                    <label className="label-container">
                        E-Mail:
                        <Field
                            name="email"
                            className={`${errors.email && touched.email && "is-warning"}`}
                            type="email"
                            placeholder="Your E-Mail..."
                            maxLength={100}
                        />
                        {errors.email && touched.email ? (
                            <div className="error-message" >{errors.email}</div>
                        ) : null}
                    </label>
                    <label className="label-container">
                        Title:
                        <Field
                            name="title"
                            className={`${errors.title && touched.title && "is-warning"}`}
                            placeholder="Your Article Title..."
                            maxLength={100}
                        />
                        {errors.title && touched.title ? (
                            <div className="error-message" >{errors.title}</div>
                        ) : null}
                    </label>
                    <label className="label-container">
                        Article Text: ({560 - values.body.length} characters)
                        <Field
                            name="body"
                            as="textarea"
                            className={`text-container ${errors.body && touched.body && "is-warning"}`}
                            placeholder="Your Article Text..."
                            maxLength={560}
                        />
                        {errors.body && touched.body ? (
                            <div className="error-message" >{errors.body}</div>
                        ) : null}
                    </label>
                    <button className="submit-btn" type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default NewArticleForm;
