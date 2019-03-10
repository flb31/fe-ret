import React from "react";
import Filter from "./Filter";

const FilterContainer = props => {

    const filters = [
        {
            title: "Course Type",
            options: [
                { title: "Self placed", value: "a"},
                { title: "Live", value: "a"},
            ]
        },

        {
            title: "Delivery Type",
            options: [
                { title: "Any delivery type", value: "a"},
                { title: "Computer-Based Training", value: "a"},
                { title: "Correspondence", value: "a"},
                { title: "Mailed Material", value: "a"},
                { title: "Other 1", value: "a"},
                { title: "Other 2", value: "a"},
            ]
        },

        {
            title: "Subject area",
            options: [
                { title: "Any subject area", value: "a"},
                { title: "HIV/AIDS", value: "a"},
                { title: "End-of-life care and palliative Health care", value: "a"},
                { title: "Domestic Violence", value: "a"},
                { title: "Other 1", value: "a"},
                { title: "Other 2", value: "a"},
                { title: "Other 3", value: "a"},
            ]
        },
    ]


    return (
        <div className="filter-container">
            
            <div className="filter-container__title">
                <i className="fas fa-filter filter-container__icon"></i>
                <span className="m-half-l">Filter Course Result</span>
            </div>

            <div className="filter-container__children">
                {
                    filters.map( (filter, index) => <Filter key={index} title={filter.title} options={filter.options} /> )
                }
            </div>
        </div>
    );
};

export default FilterContainer;
