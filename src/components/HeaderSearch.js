import React from "react";
import Dropdown from "./Dropdown";
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
                    <Dropdown
                        options={ options }
                        className="dropdown--big dropdown--white m-l"
                        title="Florida"
                    />
                    <Dropdown
                        options={ options }
                        className="dropdown--big dropdown--white m-l"
                        title="Medical Doctor"
                    />
                </div>

                <SearchBox placeholder="Search courses and providers" />

                {/* Tabs control container */}
                <nav className="tabs">
                    <a className="tabs__item tabs__item--active">Courses</a>
                    <a className="tabs__item">Providers</a>
                </nav>
            </div>
        </header>
    );
};

export default HeaderSearch;
