import React from 'react';
import { Link } from 'react-router-dom';

import Blogimg1 from '../../assets/images/blog/blog-l-1-3.jpg';
import Cmntimg from '../../assets/images/blog/blog-comment-1-1.jpg';
import Cmntimg2 from '../../assets/images/blog/blog-comment-1-2.jpg';
import Bloglp from '../../assets/images/blog/lp-1-1.jpg';
import Bloglp2 from '../../assets/images/blog/lp-1-2.jpg';
import Bloglp3 from '../../assets/images/blog/lp-1-3.jpg';

function Blogdtlspage() {
    // Define data for the latest posts
    const latestPosts = [
        { id: 1, image: Bloglp, title: 'Guide to HR Adviser and Clients Lessening', comments: 2 },
        { id: 2, image: Bloglp2, title: 'Get deep knowledge of your beauty', comments: 2 },
        { id: 3, image: Bloglp3, title: 'Get deep knowledge of your beauty', comments: 2 }
    ];

    // Define data for the categories
    const categories = ['Consulting', 'Human Resource', 'Contracts', 'Direct Hiring', 'Advisers'];

    return (
        <>
            <section className="blog-one blog-one--page">
                <div className="container">
                    <div className="row gutter-y-60">
                        <div className="col-lg-8">
                            <div className="blog-details">
                                <div className="blog-card blog-card-two @@extraClassName">
                                    <div className="blog-card__image">
                                        <img src={Blogimg1} alt="Best place of true splander" />
                                    </div>
                                    <div className="blog-card-two__content">
                                        <div className="blog-card__date">
                                            <span>30</span>
                                            Aug
                                        </div>
                                        <ul className="list-unstyled blog-card__meta">
                                            <li>
                                                <Link to="/blog">
                                                    <i className="fas fa-tags" />
                                                    Business
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">
                                                    {" "}
                                                    <i className="fa fa-comments" /> 2 Comments
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-card__title">
                                            Guide to HR Adviser and Clients Lessening
                                        </h3>
                                        <p className="blog-card-two__text">
                                            Lorem ipsum is simply free dolor sit amet, consect pisicing
                                            elit. Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                                            phaedrum. There are many variations of passages of Lorem Ipsum
                                            available, but the majority have alteration in some injected or
                                            words which don't look even slightly believable. If you are
                                            going to use a passage of Lorem Ipsum, you need to be sure there
                                            isn't anything embarrang hidden in the middle of text. All the
                                            Lorem Ipsum generators on the Internet tend to repeat predefined
                                            chunks as necessary, making this the first true generator on the
                                            Internet. It uses a dictionary of over 200 Latin words, combined
                                            with a handful of model sentence structures, to generate Lorem
                                            Ipsum which looks reasonable.{" "}
                                        </p>
                                        <p className="blog-card-two__text">
                                            Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type
                                            and scrambled it to make a type simen book. It has survived not
                                            only five centuries, but also the leap into electronic
                                            typesetting.
                                        </p>
                                        <p className="blog-card-two__text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. orem Ipsum has been the industry's standard dummy text
                                            ever since the when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has survived not
                                            only five centuries, but also the leap into unchanged.
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-details__meta">
                                    <div className="blog-details__tags">
                                        <h4 className="blog-details__tags__title">Tags</h4>
                                        <div className="sidebar__tags">
                                            <Link to="/blog">Consulting</Link>
                                            <Link to="/blog">Contract</Link>
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
                                                <Link to="/blog-details">
                                                    Does my Business Need a Director of Training?
                                                </Link>
                                            </h4>
                                        </div>
                                    </li>
                                    <li className="sidebar__posts__item">
                                        <div className="sidebar__posts__content">
                                            <h4 className="sidebar__posts__title">
                                                <Link to="/blog-details">
                                                    Get deep knowledge of your beauty
                                                </Link>
                                            </h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
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
                        </div>
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
                                            {latestPosts.map(post => (
                                                <li key={post.id} className="sidebar__posts__item">
                                                    <div className="sidebar__posts__image">
                                                        <img src={post.image} alt="hiredots" />
                                                    </div>
                                                    <div className="sidebar__posts__content">
                                                        <p className="sidebar__posts__meta">
                                                            <i className="fa fa-comments" />{post.comments} Comments
                                                        </p>
                                                        <h4 className="sidebar__posts__title">
                                                            <Link to="/blog-details">{post.title}</Link>
                                                        </h4>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="sidebar__single">
                                        <h4 className="sidebar__title">Categories</h4>
                                        <ul className="sidebar__categories list-unstyled">
                                            {categories.map((category, index) => (
                                                <li key={index}>
                                                    <Link to="/blog">{category}</Link>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogdtlspage