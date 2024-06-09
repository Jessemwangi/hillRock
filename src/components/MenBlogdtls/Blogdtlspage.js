import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CommentForms from './CommentForms';
import CommentRender from './CommentRender';
import NewsSideBar from './NewsSideBar';
import { newsData } from '../../data/news';

function Blogdtlspage() {
const { id } = useParams();
const[news,setNews] =useState([])

useEffect(()=>
{
    setNews(newsData.filter(({ id: newsId }) =>newsId == id));
},[id])

    return (
        <>{
            news && news?.map((item) =>

            <section className="blog-one blog-one--pag" key={item.id}>
                <div className="container">
                    <div className="row gutter-y-60">
                            
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="blog-card blog-card-two @@extraClassName">
                                    <div className="blog-card__image">
                                        <img src={item.image} alt="Best place of true splander" width={'770px'} />
                                    </div>
                                    <div className="blog-card-two__content">
                                        <div className="blog-card__date">
                                        <span>{new Date(item.date).getDate()}</span>
                                        {new Date(item.date).toLocaleString('default', { month: 'short' })}
                                        </div>
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <Link to={`/news?cat=${item.category}`}>
                                                    <i className="fas fa-tags" />
                                                    {item.category}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/news">
                                                    {" "}
                                                    <i className="fa fa-comments" /> {item?.commentList?.length || 0} Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                           {item?.title}
                                        </h3>
                                        <p className="blog-card-two__text">
                                            {item?.content}{" "}
                                        </p>
                                        <p className="blog-card-two__text">
                                           {item?.desc1}
                                        </p>
                                        <p className="blog-card-two__text">
                                            {item?.desc2}
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-details__meta">
                                    <div className="blog-details__tags">
                                        <h4 className="blog-details__tags__title">Tags</h4>
                                        <div className="sidebar__tags">
                                            <Link to={`/news?cat=Consulting`}>Consulting</Link>
                                            <Link to={`/news?cat=Contract`}>Contract</Link>
                                        </div>
                                    </div>
                                    <div className="blog-details__social">
                                        <Link to="https://twitter.com">
                                            <i className="fab fa-twitter" aria-hidden="true" />
                                            <span className="sr-only">Twitter</span>
                                        </Link>
                                        <Link to="https://facebook.com">
                                            <i className="fab fa-facebook" aria-hidden="true" />
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                        <Link to="https://pinterest.com">
                                            <i className="fab fa-pinterest-p" aria-hidden="true" />
                                            <span className="sr-only">Pinterest</span>
                                        </Link>
                                        <Link to="https://instagram.com">
                                            <i className="fab fa-instagram" aria-hidden="true" />
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                    </div>
                                </div>
                                <ul className="sidebar__posts list-unstyled blog-details__paginations">
                                    <li className="sidebar__posts__item">
                                        <div className="sidebar__posts__content">
                                            <h4 className="sidebar__posts__title">
                                                <Link to="/news-details">
                                                    Does my Business Need a Director of Training?
                                                </Link>
                                            </h4>
                                        </div>
                                    </li>
                                    <li className="sidebar__posts__item">
                                        <div className="sidebar__posts__content">
                                            <h4 className="sidebar__posts__title">
                                                <Link to="/news-details">
                                                    Get deep knowledge of your beauty
                                                </Link>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <CommentRender newsId={item.id} commentList={item.commentList}/>
                            <CommentForms newsId={item.id} commentList={item.commentList}/>
                        </div>
                         
                        <NewsSideBar/>
                    </div>
                </div>
            </section>
)
               }
        </>
    )
}

export default Blogdtlspage