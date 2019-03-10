import React from "react";
import Dowpdown from "./Dropdown";

const HeaderSearch = () => { // eslint-disable-line arrow-body-style
    const options = [
        { key: "1", title: "option 1" },
        { key: "1", title: "option 2" },
    ];

    return (
        <div className="header-search">
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

            <input type="text" />

            <div>TABS</div>
        </div>
    );
};

export default HeaderSearch;
