import React from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/news';

const NewsSideBar = () => {
    const uniqueCategories = [...new Set(newsData.map(news => news.category))];
    return (
        <div className="col-lg-4">
        <div className="sidebar">
            <aside className="widget-area">
                <div className="sidebar__single sidebar__search-wrap">
                    <form action="#" className="sidebar__search">
                        <input type="text" placeholder="Search here" />
                        <button type="submit" aria-label="search submit">
                            <span>
                                <i className="icon-magnifying-glass" />
                            </span>
                        </button>
                    </form>
                </div>
                <div className="sidebar__single">
                    <h4 className="sidebar__title">Latest posts</h4>
                    <ul className="sidebar__posts list-unstyled">
                        {newsData.map(post => (
                            <li key={post.id} className="sidebar__posts__item">
                                <div className="sidebar__posts__image">
                                    <img src={post.image} alt="hiredots" height={'73'} />
                                </div>
                                <div className="sidebar__posts__content">
                                    <p className="sidebar__posts__meta">
                                        <i className="fa fa-comments" />{post.comments} Comments
                                    </p>
                                    <h4 className="sidebar__posts__title">
                                        <Link to={`/news-details/${post.id}`}>{post.title}</Link>
                                    </h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar__single">
                    <h4 className="sidebar__title">Categories</h4>
                    <ul className="sidebar__categories list-unstyled">
                        {uniqueCategories.map((cat, index) => (
                            <li key={index}>
                                <Link to={`/news?cat=${cat}`}>{cat}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar__single">
                    <h4 className="sidebar__title">Tags</h4>
                    <div className="sidebar__tags">
                        <Link to="/blog">Consulting</Link>
                        <Link to="/blog">Contract</Link>
                        <Link to="/blog">Hiring</Link>
                        <Link to="/blog">Human resource</Link>
                        <Link to="/blog">Adviser</Link>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    );
};

export default NewsSideBar;