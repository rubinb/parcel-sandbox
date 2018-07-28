import * as React from 'react';
import { Container } from 'semantic-ui-react'
import FooterLinks from '../../components/FooterLinks';
import './styles.scss';

export const Footer = () => {
    return (
        <div className='footer'>
            <Container >
                <FooterLinks />
            </Container>
        </div>
    )
}

export default Footer;