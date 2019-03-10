import React from "react";
import PropTypes from "prop-types";

const SearchBox = props => {
    return (
        <div className="searchbox">
            <i className="fas fa-search searchbox__icon"></i>
            <input type="text" className="searchbox__input" placeholder={ props.placeholder } />
        </div>
    )
};

SearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBox;
