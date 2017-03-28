import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes';
import render, {
  setupReducers,
  replaceReducers,
  applyMiddleware
} from '@sketchpixy/rubix/lib/node/redux-router';
import l20n from '@sketchpixy/rubix/lib/L20n';
import reducers from './redux/reducers';

l20n.initializeLocales({
  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
  'default': 'en-US'
});



setupReducers(reducers);

render(routes, () => {
  l20n.ready();
});

if (module.hot) {
  module.hot.accept('./routes', () => {
    // reload routes again
    require('./routes').default
    render(routes);
  });
  module.hot.accept('./redux/reducers', () => {
  // reload reducers again
  	let newReducers = require('./redux/reducers');
    replaceReducers(newReducers);
  });
}


// import React from 'react';
// import ReactDOM from 'react-dom';

// import routes from './routes';
// import render from '@sketchpixy/rubix/lib/node/router';
// import l20n from '@sketchpixy/rubix/lib/L20n';

// l20n.initializeLocales({
//   'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
//   'default': 'en-US'
// });

// render(routes, () => {
//   l20n.ready();
// });

// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     // reload routes again
//     require('./routes').default
//     render(routes);
//   });
// }
