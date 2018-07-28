import * as React from 'react';
import { Link } from 'react-router-dom';

interface INavItem {
    name: string;
    url: string;
    index: number;
}

const NavItem = (props: INavItem) => {
    const { index, ...rest } = props;
    return <li key={`nav-${index}`} ><Link to={rest.url}>{rest.name}</Link></li>
}

export default NavItem;