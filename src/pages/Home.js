import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";
import {
    Header,
    HeaderSearch,
    FilterContainer,
    Dropdown,
} from "../components";

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { circuits } = this.props;

        const options = [
            { value: "", title: "Relevance" },
            { value: "", title: "Title" },
            { value: "", title: "Min price first" },
            { value: "", title: "Max price first" },
        ]

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
                            <div className="grid__item two-thirds">
                                <div className="results">
                                    <div className="results__sorts grid">
                                        <div className="grid__item one-half">
                                            Page 1 <span>of</span> 1000 results
                                        </div>

                                        <div className="results__sort">
                                            Sorted by:
                                            <Dropdown
                                                options={ options }
                                                title="Relevance"
                                                className="m-l" />
                                        </div>
                                    </div>
                                </div>
                            </div>
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
