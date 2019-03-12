import React, { Component } from "react";
import { connect } from "react-redux";

class Loading extends Component {
    constructor(props) {
        super ( props );
    }
    render() {
        const { courses } = this.props;
        return courses.loading ? <div className="loading">Cargando...</div> : null
    }
}

const mapStateToProps = ( state ) => ( {
    courses: state.courses,
} );


export default connect( mapStateToProps, {} )( Loading );
