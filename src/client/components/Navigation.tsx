import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Navigation extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/page-two'>Secondary</Link></li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Navigation;