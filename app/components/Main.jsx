var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns small-centered">
          <p>Main component</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
