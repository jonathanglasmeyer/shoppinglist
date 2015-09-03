import React from 'react';
import Root from './components/Root.jsx';

// import {Router, Route} from 'react-router';
// import {history} from 'react-router/lib/HashHistory';
// import {reduxRouteComponent} from 'redux-react-router';

// import {RecipeDetailPage} from 'pages';




// React.render((
//   <Router history={history}>
//     <Route path='/' component={App}>
//       <Route path='recipe/:id' component={RecipeDetailPage} />
//     </Route>
//   </Router>
// ), document.getElementById('content'));


React.render(<Root />, document.getElementById('content'));
