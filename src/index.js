/**
 * Created by zhongpeipei on 2017/3/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import UserAddPage from './pages/UserAdd';
import HomePage from './pages/Home';
import UserList from './pages/UserList';
import UserEdit from './pages/UserEdit';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/user/add" component={UserAddPage} />
    <Route path="/user/list" component={UserList} />
      <Route path="/user/edit/:id" component = {UserEdit} />
  </Router>
), document.getElementById('app'));
