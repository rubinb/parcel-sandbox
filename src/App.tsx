import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import Header from './client/containers/Header/Header';
import BreadCrumbs from './client/components/Breadcrumbs';
import Footer from './client/containers/Footer/Footer';
import { Home, PageTwo } from '../exports'
import './styles.scss';

export default class App extends Component<any, any> {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <Header />
                    <Container className='content'>
                        <BreadCrumbs />
                        <Route exact path='/' component={Home} />
                        <Route path='/page-two' component={PageTwo} />
                    </Container>
                <Footer />
            </React.Fragment>
        )
    }
}