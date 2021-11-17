import React, { useState } from "react";
import "./NewArticleForm.css";
import { newArticleSchema } from "./NewArticleValidation"

const NewArticleForm = (props:any) => {

    const [formState, setFormState] = useState({userName: "", userEmail: "", articleTitle: "", articleText: ""});
    const [errors, setErrors] = useState([]);

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    const handleSubmit = async (event: any) => {
        newArticleSchema
            .validate(formState, {abortEarly: false})
            .then(() => {
                setErrors([]);
                //setTimeout is for re-rendering to occur (clearing of errors on the page)
                setTimeout(() =>
                    alert(
                        "Author's Name: " + formState.userName + "\n" +
                        "Author's E-Mail: " + formState.userEmail + "\n" +
                        "Article Title: " + formState.articleTitle + "\n" +
                        "Article Text: " + formState.articleText
                    ),
                    100
                );
            })
            .catch(err => {
                setErrors(err.errors);
            });
        
        event.preventDefault();
    }

    return (
        <div className="popup-background">
            <div className="popup-container">
                <div className="popup-header">
                    <h3>Add a New Article</h3>
                    <button className="close-btn" onClick={() => props.setOpenClosed(false)}>❌</button>
                </div>
                <form className="form-container" onSubmit={handleSubmit} noValidate>
                    <label className="label-container">
                        Name:
                        <input
                            name="userName"
                            type="text"
                            value={formState.userName}
                            onChange={handleChange}
                            placeholder="Your Name..."
                            maxLength={50}
                        />
                    </label>
                    <label className="label-container">
                        E-Mail:
                        <input
                            name="userEmail"
                            type="email"
                            value={formState.userEmail}
                            onChange={handleChange}
                            placeholder="Your E-Mail..."
                            maxLength={100}
                        />
                    </label>
                    <label className="label-container">
                        Title:
                        <input
                            name="articleTitle"
                            type="text"
                            value={formState.articleTitle}
                            onChange={handleChange}
                            placeholder="Your Article Title..."
                            maxLength={100}
                        />
                    </label>
                    <label className="label-container">
                        Article Text: ({560 - formState.articleText.length} characters)
                        <textarea
                            name="articleText"
                            className="text-container"
                            value={formState.articleText}
                            onChange={handleChange}
                            placeholder="Your Article Text..."
                            maxLength={560}
                        />
                    </label>
                    <div className="errors-container">
                        {errors && errors.map((error) => <p key={error}>{error}</p>)}
                    </div>
                    <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default NewArticleForm;
