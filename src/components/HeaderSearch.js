import React from "react";
import Dowpdown from "./Dropdown";
import SearchBox from "./SearchBox";

const HeaderSearch = () => { // eslint-disable-line arrow-body-style
    const options = [
        { key: "1", title: "option 1" },
        { key: "1", title: "option 2" },
    ];

    return (
        <header className="header-search">
            <div className="wrapper">
                <div className="header-search__selectors"> Find CE for a
                    <Dowpdown
                        options={ options }
                        className="dropdown--big dropdown--white m-l"
                        title="Florida"
                    />
                    <Dowpdown
                        options={ options }
                        className="dropdown--big dropdown--white m-l"
                        title="Medical Doctor"
                    />
                </div>

                <SearchBox placeholder="Search courses and providers" />

                <div>TABS</div>
            </div>
        </header>
    );
};

export default HeaderSearch;
