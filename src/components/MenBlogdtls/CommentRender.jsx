import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/news';

const CommentRender = ({newsId, commentList}) => {
    return (
        <>
        {
            commentList &&

                <div className="comments-one" >
                <h3 className="comments-one__title">{commentList.length} Comments</h3>
               { commentList?.map((comment,index)=> 
               <ul className="list-unstyled comments-one__list" key={comment.id}>
                    <li className="comments-one__card">
                        <div className="comments-one__card__image">
                            <img src={comment.us_image} alt={comment?.user} />
                        </div>
                        <div className="comments-one__card__content">
                            <h3 className="comments-one__card__title">{comment?.user} {" " } </h3>
                            <p className="comments-one__card__text">
                              {comment.text}
                            </p>
                            <div className="comments-one__card__btn">
                                <Link to="#" className="hiredots-btn comments-one__card__reply">
                                    <span>{' ' } Reply</span>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
                )}
            </div>
            
            
        }
        </>
    );
};

export default CommentRender;