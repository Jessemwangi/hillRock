import React from 'react'
import { Link } from 'react-router-dom'
import Bredimg from '../../assets/images/shapes/page-header-shape.png'

function Main({ subtitle, title }) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__bg" />
                <div className="page-header__shape">
                <img src={Bredimg} alt="hiredots"/>
                </div>
                <div className="container">
                    <h2 className="page-header__title">{title}</h2>
                    <ul className="hiredots-breadcrumb list-unstyled">
                        <li>
                            <Link to="/">{subtitle}</Link>
                        </li>
                        <li>
                            <span>{title}</span>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}

export default Main