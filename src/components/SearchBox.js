import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSearchCourses } from "../redux/action";

class SearchBox extends Component {
    constructor( props ) {
        super(props);
        this.state = {
            query: '',
            timeout: null,
        }
        this.handleChange = this.handleChange.bind( this );
        this.searchCourseByQuery = this.searchCourseByQuery.bind( this );
        this.DELAY = 700;
        this.MIN_LENGTH = 3;
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    searchCourseByQuery () {
        const { query, timeout } = this.state;

        if ( timeout ) {
            clearTimeout(timeout);
            this.setState({
                timeout: null,
            });
        }

        if(query.length >= this.MIN_LENGTH) {
            const timeout = setTimeout(() => {
                this.props.fetchSearchCourses(query);
            }, this.DELAY);

            this.setState({
                timeout: timeout,
            });
        }
        
    }


    render() {
        return (
            <div className="searchbox p-h mid--p-h-none p-v mid--p-v-none">
                <i className="fas fa-search searchbox__icon p-l p-t mid--p-t-none mid--p-l-none"></i>
                <input
                    type="text"
                    className="searchbox__input"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                    onKeyUp={this.searchCourseByQuery}
                    autoComplete="off"
                    placeholder={ this.props.placeholder } />
            </div>
        )
    }
};

SearchBox.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

const mapStateToProps = ( state ) => ( {
} );

const mapDispatchToProps = {
    fetchSearchCourses
};

export default connect( mapStateToProps, mapDispatchToProps )( SearchBox );
