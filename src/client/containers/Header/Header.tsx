import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'semantic-ui-react';
import Navigation from '../../components/Navigation'
import './styles.scss';

class Header extends Component {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className='app-header'>
                <div className='header-stripe'>
                    <Container>
                        Sample Message Here
                    </Container>
                </div>
                <div className='header-navigation'>
                    <Container>
                        <Navigation />
                    </Container>
                </div>
            </div>
        );
    }
}

export default Header;