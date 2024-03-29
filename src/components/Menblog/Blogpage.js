import React from 'react';
import { Link } from 'react-router-dom';

import Blog1 from '../../assets/images/blog/blog-1-1.jpg';
import Blog2 from '../../assets/images/blog/blog-1-2.jpg';
import Blog3 from '../../assets/images/blog/blog-1-3.jpg';
import Blog4 from '../../assets/images/blog/blog-1-4.jpg';
import Blog5 from '../../assets/images/blog/blog-1-5.jpg';
import Blog6 from '../../assets/images/blog/blog-1-6.jpg';

function BlogPage() {
    const blogData = [
        { id: 1, image: Blog1, date: '30 Aug', title: 'Guide to HR Adviser and Clients Lessening', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' },
        { id: 2, image: Blog2, date: '30 Aug', title: 'Top Skin care tips for oily skins', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' },
        { id: 3, image: Blog3, date: '30 Aug', title: 'Outstanding island for winter sun', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' },
        { id: 4, image: Blog4, date: '30 Aug', title: 'My supervisor didn\'t like the latest', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' },
        { id: 5, image: Blog5, date: '30 Aug', title: 'We need to build it so that it scales', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' },
        { id: 6, image: Blog6, date: '30 Aug', title: 'Big picture organic growth, or fast', info: 'Lorem ipsum is simply free dolor sit amet, consect pisicing elit.' }
    ];

    return (
        <>
            <section className="blog-one blog-one--page">
                <div className="container">
                    <div className="row gutter-y-30">
                        {blogData.map(blog => (
                            <div key={blog.id} className="col-md-6 col-lg-4">
                                <div className="blog-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="000ms">
                                    <div className="blog-card__image">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="blog-card__content">
                                        <div className="blog-card__date">
                                            <span>{blog.date}</span>
                                        </div>
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <Link to="/blog">
                                                    <i className="fas fa-tags" />
                                                    Business
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog-details">
                                                    <i className="fa fa-comments" /> 2 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                            <Link to="/blog-details">{blog.title}</Link>
                                        </h3>
                                        <p className="blog-card__info">{blog.info}</p>
                                        <Link to="/blog-details" className="blog-card__link">
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
