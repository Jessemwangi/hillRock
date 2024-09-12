import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { newsData } from '../../data/news';

const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 30,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
};

function Blog() {
    return (
        <div>
            <section className="blog-one">
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">News Updates</h6>
                        <h3 className="sec-title__title">
                            Latest Articles &amp; <br />
                            News from the Blogs
                        </h3>
                    </div>
                    <Slider className='blog-slider' {...settings} slidesToShow={3} arrows={false}>
                        {newsData.slice(0,3).map((blog, index) => (
                            <div className="item" key={index}>
                                <div className="blog-card fadeInUp" >
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
                                                    <i className="fa fa-comments" /> {blog.comments}
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                            <Link to={`/news-details/${blog.id}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p className="blog-card__info">
                                            {blog.info}
                                        </p>
                                        <Link to={`/news-details/${blog.id}`} className="blog-card__link">
                                            Read more
                                            <i className="icon-right-arrow" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default Blog;
