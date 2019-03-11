import React, { Component } from "react";
import PropTypes from "prop-types";

class CourseCard extends Component {
    
    render() { 
        
        return (
            <article className="course-card">
                <div className="course-card__image">
                    <img
                        src="/static/img/image-course.png"
                        alt="Course Title"/>
                </div>
                
                <div className="course-card__info mid--p-half-l mid--p-triple-r">
                    <div className="course-card__info__title">
                        Preventing Medical Errors
                    </div>

                    <div className="course-card__info__tag">
                        Featured
                    </div>

                    <div className="course-card__info__description">
                        Florida hospital Memorial Medical Center
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
    }
}

CourseCard.PropTypes = {
    course: PropTypes.object.isRequired
};


export default CourseCard;
