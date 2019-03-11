import React, { Component } from "react";
import PropTypes from "prop-types";

const CourseCard  = props => {
    
    const { name, status, provider, featuredBanner,  } = props.course;

    const featuredRender = props.featured ? <div className="course-card__info__tag">Featured</div> : null
    
    return (
        <article className="course-card">
            <div className="course-card__image">
                <img
                    src={`https://storage.cebroker.com/CEBroker/${featuredBanner}`}
                    alt={name} />
            </div>
            
            <div className="course-card__info mid--p-half-l mid--p-triple-r">
                <div className="course-card__info__title">
                    { name }
                </div>

                { featuredRender }

                <div className="course-card__info__description">
                    { provider.name }
                </div>

                <div className="course-card__info__icons">
                    <i className="far fa-clock"></i>
                    <span>1 hours</span>
                    <i className="fas fa-laptop"></i>
                    <span>Computed Based Training</span>
                </div>
            </div>

            <div className="course-card__more-info p-t mid--p-t-none">
                <div className="course-card__more-info__price">$50,00</div>

                <button className="course-card__more-info__share">
                    <i className="fas fa-share"></i>
                </button>
            </div>
        </article>
    );
};

CourseCard.defaultProps = {
    featured: false,
}

CourseCard.PropTypes = {
    course: PropTypes.object.isRequired,
    featured: PropTypes.bool,
};


export default CourseCard;
