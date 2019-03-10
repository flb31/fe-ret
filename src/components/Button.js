import React from "react";
import PropTypes from "prop-types";

const Button = props => <button className={ `button ${ props.className }` }>{ props.children }</button>;

Button.defaultProps = {
    className: "",
};

Button.propTypes = {
    className: PropTypes.string,
};

export default Button;
