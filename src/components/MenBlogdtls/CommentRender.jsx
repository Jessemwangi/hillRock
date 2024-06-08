import React from 'react';
import { Link } from 'react-router-dom';
import Cmntimg2 from '../../assets/images/blog/blog-comment-1-2.jpg';
import Cmntimg from '../../assets/images/blog/blog-comment-1-1.jpg';

const CommentRender = () => {
    return (
        <div className="comments-one">
        <h3 className="comments-one__title">2 Comments</h3>
        <ul className="list-unstyled comments-one__list">
            <li className="comments-one__card">
                <div className="comments-one__card__image">
                    <img src={Cmntimg} alt="" />
                </div>
                <div className="comments-one__card__content">
                    <h3 className="comments-one__card__title">Kevin martin</h3>
                    <p className="comments-one__card__text">
                        It has survived not only five centuries, but also the leap
                        into electronic typesetting simply fee text aunchanged. It was
                        popularised in the sheets containing lorem ipsum is simply
                        free text.
                    </p>
                    <div className="comments-one__card__btn">
                        <Link to="#" className="hiredots-btn comments-one__card__reply">
                            <span>Reply</span>
                        </Link>
                    </div>
                </div>
            </li>
            <li className="comments-one__card">
                <div className="comments-one__card__image">
                    <img src={Cmntimg2} alt="" />
                </div>
                <div className="comments-one__card__content">
                    <h3 className="comments-one__card__title">Sarah albert</h3>
                    <p className="comments-one__card__text">
                        Mauris non dignissim purus, ac commodo diam. Donec sit amet
                        lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                        Aliquam tellus nulla, sollicitudin at euismod.
                    </p>
                    <div className="comments-one__card__btn">
                        <Link to="#" className="hiredots-btn comments-one__card__reply">
                            <span>Reply</span>
                        </Link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default CommentRender;