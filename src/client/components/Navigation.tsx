import * as React from 'react';
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

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
            return (<li key={i}><Link to={el.url}>{el.name}</Link></li>);
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