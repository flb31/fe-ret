import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import {
    Header,
    HeaderSearch,
    FilterContainer,
} from "../components";

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { circuits } = this.props;

        return (
            <div>
                <Header />

                <HeaderSearch />

                <section className="m-double-t">
                    <div className="wrapper">
                        <div className="grid overflow-visible">
                            <div className="grid__item one-third">
                                <FilterContainer />
                            </div>
                            <div className="grid__item two-thirds">Cards</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
