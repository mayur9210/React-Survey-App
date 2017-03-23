import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

export default class App extends React.Component {
    render() {
        return(
            <div>
              <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                  <li><IndexLink to="/">Home</IndexLink></li>
                  <li><Link to="/survey">Survey</Link></li>
                </ul>
              </nav>
              <span>{this.props.children}</span>
            </div>
        )}
}

App.propTypes = {
    children: PropTypes.element
};


