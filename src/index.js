import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './components/App';
import { Router, Route, hashHistory } from 'react-router';
// import Login from './components/admin/Login.jsx';
import Form from './components/Form/Form.js';
import DeleteList from "./components/Form/DeleteList";
// import Plateform from './components/Plateform/Plateform.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* <Route path="/login" component={Login}/>
    <Route path="/plateform" component={Plateform}/> */}
    <Route path="/form" component={Form}/>
    <Route path="/delete" component={DeleteList}/>
  </Router>
), document.getElementById('root'))
