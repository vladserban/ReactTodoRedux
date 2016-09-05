var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">An App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
                        </li>
                        <li>
                            <Link to="/page" activeClassName="active-link">Another Page</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="http://vladserban.com" target="_blank">Vlad Serban</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
