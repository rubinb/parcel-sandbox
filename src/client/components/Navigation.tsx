import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
// import { Button } from 'semantic-ui-react';
import NavItem from './NavItems';

class Navigation extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { navItems: [], active: '' };
    }

    componentDidMount() {
        const baseUrl = 'http://localhost:3000';
        axios.get(`${baseUrl}/navlinks`).then((res) => {
            this.setState({ navItems: res.data.navigation });
        });
    }

    render(): JSX.Element {
        const { navItems } = this.state;
        const Navigation = navItems.map((el: any, i: number) => {
            return <NavItem key={i} index={i} {...el} />;
        });

        return (
            <React.Fragment>
                <ul>
                    {Navigation}
                </ul>
            </React.Fragment>
        );
    }
}

export default Navigation;