import React from "react";
import PropTypes from "prop-types";

const MenuItem = props => {
    const classOutsanding = props.outstanding ? "menu__item--outstanding" : "";
    return <a href={ props.href } className={ `menu__item ${ classOutsanding }` }>{ props.title }</a>;
};

MenuItem.defaultProps = {
    outstanding: false,
};

MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    outstanding: PropTypes.bool,
};

export default MenuItem;
