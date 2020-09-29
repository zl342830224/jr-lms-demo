import React from 'react';
import ReactDom from 'react-dom';
import { StaticRouter } from 'react-router-dom';

import App from './App';

it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDom.render((
                 <StaticRouter>
                        <App />
                 </StaticRouter>
        ),div);
        ReactDom.unmountCompomentAtNode(div);
});
