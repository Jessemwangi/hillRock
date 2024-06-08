import React from 'react';
import { Link } from 'react-router-dom';

import Blogimg1 from '../../assets/images/blog/blog-l-1-3.jpg';
import Bloglp from '../../assets/images/blog/lp-1-1.jpg';
import Bloglp2 from '../../assets/images/blog/lp-1-2.jpg';
import Bloglp3 from '../../assets/images/blog/lp-1-3.jpg';
import CommentForms from './CommentForms';
import CommentRender from './CommentRender';
import NewsSideBar from './NewsSideBar';

function Blogdtlspage() {
    // Define data for the latest posts
    const latestPosts = [
        { id: 1, image: Bloglp, title: 'Guide to HR Adviser and Clients Lessening', comments: 2 },
        { id: 2, image: Bloglp2, title: 'Get deep knowledge of your beauty', comments: 2 },
        { id: 3, image: Bloglp3, title: 'Get deep knowledge of your beauty', comments: 2 }
    ];
// TODO: get id from URL, search and populate the data
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
                            <CommentRender/>
                            <CommentForms/>
                        </div>
                        <NewsSideBar/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogdtlspage