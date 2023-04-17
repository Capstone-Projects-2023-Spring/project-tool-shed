import React from 'react';
import User from './components/User';
import renderComponent from './util/renderComponent';

renderComponent('#root', <User {...window._UserSingularProps} />);

 

