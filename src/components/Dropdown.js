import React, { Component } from "react";
import PropTypes from "prop-types";

class Dropdown extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            showOptions: false,
            title: "",
            // value: "", // send to callback
        };

        this.renderOptions = this.renderOptions.bind ( this );
        this.changeOption = this.changeOption.bind ( this );
        this.toggleDropdown = this.toggleDropdown.bind ( this );
    }

    componentWillMount( ) {
        const { title } = this.props;

        this.setState ( {
            title: title,
        } );
    }

    changeOption( option ) {
        this.setState ( {
            title: option.title,
            // value: option.value,
        } );

        this.toggleDropdown( );
    }

    toggleDropdown( ) {
        this.setState({
            showOptions: !this.state.showOptions
        });
    }

    renderOptions( ) {
        const { options } = this.props;
        return options.map ( option => {
            
            return (
                <div
                    key={option.title}
                    className="dropdown__item"
                    value={ option.value }
                    onClick={ () => this.changeOption( option ) }>
                    { option.title }
                </div>
            );
        });
    }

    render ( ) {

        const { title, showOptions } = this.state;
        const { className } = this.props;
        const classShow = showOptions ? "dropdown--show" : "";

        return (
            <div
                className={ `dropdown ${ className } ${ classShow }` }
                onClick={ this.toggleDropdown }>
                <div className="dropdown__selected">{ title }</div>

                <div className="dropdown__options">
                    { this.renderOptions( ) }
                </div>
            </div>
        );
    }
}

Dropdown.defaultProps = {
    className: "",
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
};

export default Dropdown;
