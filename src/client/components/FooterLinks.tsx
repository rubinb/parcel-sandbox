import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterLinks extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <p>Footer Links here</p>
            </React.Fragment>
        );
    }
}

export default FooterLinks;