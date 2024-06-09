import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/news';

function BlogPage() {

    return (
        <>
            <section className="blog-one blog-one--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {newsData.map(blog => (
                            <div key={blog.id} className="col-md-6 col-lg-4">
                                <div className="blog-card wow fadeInUp" data-wow-duration="100ms" data-wow-delay="000ms">
                                    <div className="blog-card__image">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="blog-card__content">
                                        <div className="blog-card__date">
                                        <span>{new Date(blog.date).getDate()}</span>
                                        {new Date(blog.date).toLocaleString('default', { month: 'short' })}
                                        </div>
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <Link to={`/news?cat=${blog.category}`}>
                                                    <i className="fas fa-tags" />
                                                   {blog.category}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={`/news-details/${blog.id}`}>
                                                    <i className="fa fa-comments" /> 2 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                        <Link to={`/news-details/${blog.id}`}>{blog.title}</Link>
                                        </h3>
                                        <p className="blog-card__info">{blog.info}</p>
                                        <Link to={`/news-details/${blog.id}`} className="blog-card__link">
                                            Read more
                                            <i className="icon-right-arrow" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPage;
