import React from 'react';
// import {Router, Route} from 'react-router';
// import {history} from 'react-router/lib/HashHistory';
// import {reduxRouteComponent} from 'redux-react-router';

// import {RecipeDetailPage} from 'pages';

import Root from './components/Root.jsx';




// React.render(
//   <Provider store={store}>
//     {() => <App />}
//   </Provider>,
//   document.getElementById('content')
// );

// React.render((
//   <Router history={history}>
//     <Route path='/' component={App}>
//       <Route path='recipe/:id' component={RecipeDetailPage} />
//     </Route>
//   </Router>
// ), document.getElementById('content'));


React.render(<Root />, document.getElementById('content'));
