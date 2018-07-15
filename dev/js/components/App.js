import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import {Router, Route, browserHistory, IndexRoute} from "react-router";
require('../../scss/style.scss');


const App = () => (

          <Router >
                <Route path={"/"} component={UserList} >
                    <IndexRoute component={UserList} />
                    <Route path={"user"} component={UserList} />
                    <Route path={"home"} component={UserList} />
                </Route>
                <Route path={"home-single/:id"} component={UserList}/>
            </Router>





);

export default App;

// <div>
//     <h2>User List</h2>
//     <UserList />
//     <hr />
//     <h2>User Details</h2>
//     <UserDetails />
// </div>
