import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';

class BreadCrumbs extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <Breadcrumb className='app-block'>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section link>Category</Breadcrumb.Section>
                <Breadcrumb.Divider />
                {/* <Breadcrumb.Section active>Active Category</Breadcrumb.Section> */}
            </Breadcrumb>
        );
    }
}

export default BreadCrumbs;