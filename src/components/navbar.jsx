import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <sapn className="navbar-count"></sapn>
            </div>
        );
    }
}

export default Navbar;