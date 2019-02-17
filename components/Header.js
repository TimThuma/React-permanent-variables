// HEADER COMPONENT
// contains some dynamic routing

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '15px' }}>
            <Link route="/">
                <a className="item">Home</a>
            </Link>

            <Link route="/aaaaabout">
                <a className="item">About</a>
            </Link>
        </Menu>
    );
};
