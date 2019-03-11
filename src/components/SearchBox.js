import React from "react";
import PropTypes from "prop-types";

const SearchBox = props => {
    return (
        <div className="searchbox p-h mid--p-h-none p-v mid--p-v-none">
            <i className="fas fa-search searchbox__icon p-l p-t mid--p-t-none mid--p-l-none"></i>
            <input
                type="text"
                className="searchbox__input"
                placeholder={ props.placeholder } />
        </div>
    )
};

SearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBox;
