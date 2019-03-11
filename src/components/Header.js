import React from "react";
import MenuItem from "./MenuItem";
import Button from "./Button";

const Header = () => { // eslint-disable-line arrow-body-style
    return (
        <header className="header">
            <div className="header__wrapper wrapper">
                <figure className="header__figure">
                    <img src="/static/img/logo.png" alt="Logo" />
                </figure>
                <nav className="menu">
                    <MenuItem title="Features" href="#" />
                    <MenuItem title="Plans" href="#" />
                    <MenuItem title="Organizations" href="#" />
                    <MenuItem title="Browser Courses" href="#" outstanding />
                    <MenuItem title="Support" href="#" />
                </nav>

                <div className="header__buttons m-t mid--m-t-none">
                    <Button>Sign In</Button>
                    <Button className="button--primary m-l">7 days trial</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
