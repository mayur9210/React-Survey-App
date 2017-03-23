import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <Link to="/survey"><h3>Start Survey</h3></Link>
            </div>
        );
    }
}
