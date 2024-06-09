import React from 'react';

const CommentForms = ({newsId}) => {
    return (
        <div className="comments-form">
        <h3 className="comments-form__title">Leave a comment</h3>
        <form className="comments-form__form contact-form-validated form-one">
            <div className="form-one__group">
                <div className="form-one__control">
                    <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="form-one__control">
                    <input type="email" name="email" placeholder="Email address" />
                </div>
                <div className="form-one__control form-one__control--full">
                    <textarea name="message" placeholder="Write  a message" defaultValue={""} />
                </div>
                <div className="form-one__control form-one__control--full">
                    <button type="submit" className="hiredots-btn hiredots-btn--base">
                        <span>Submit comment</span>
                    </button>
                </div>
            </div>
        </form>
        <div className="result" />
    </div>
    );
};

export default CommentForms;