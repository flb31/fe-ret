import React, { Component } from 'react';
import PropTypes from "prop-types";

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            viewMore: false,
        }

        this.renderOptions = this.renderOptions.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        this.viewMoreOptions = this.viewMoreOptions.bind(this);
    }

    createName (name) {
        return name.replace(' ', '_');
    }
    
    renderOptions () {
        const { options } = this.props;
        const { viewMore } = this.state;

        const theOptions = !viewMore ? options.slice(0, 4) : options;

        return theOptions.map( (option, index) => {
            return (
                <div className="filter__option" key={ option.title }>
                    <input
                        type="radio"
                        value={ option.value }
                        id={option.title}
                        name={ this.createName(this.props.title)  } />
                    <span className="check m-r"></span>
                    <label htmlFor={option.title}>{ option.title }</label>
                </div>
            );
        });
    }

    componentWillMount() {
        const { options } = this.props;
        const MAX_OPTIONS_VIEW = 4;

        this.setState({
            show: this.props.show,
            viewMore: options.length <= MAX_OPTIONS_VIEW
        })
    }

    toggleFilter () {
        this.setState({
            show: !this.state.show,
        })
    }

    viewMoreOptions () {
        this.setState({
            viewMore: true,
        })
    }

    render() {
        const { title } = this.props;
        const { show, viewMore } = this.state;

        const showClassTitle = show ? "filter__title--show" : "";

        const renderMore = !viewMore ? <a className="filter__more" onClick={ this.viewMoreOptions }>View More</a> : null;

        const renderOptions =  show ? <div className="filter__options">{ this.renderOptions() } { renderMore } </div> : null;
        

        return (
            <div className="filter">
                <div
                    onClick={ this.toggleFilter }
                    className={`filter__title ${showClassTitle}`}>
                    { title }
                </div>
                
                { renderOptions }
            </div>
        );
    }
}

Filter.defaultProps = {
    show: true
};

Filter.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    show: PropTypes.bool,
};

export default Filter;
