import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from '../../ui/containers/MainLayout.jsx';

import Header from '../../ui/components/Header/Header.jsx';
import SideNav from '../../ui/components/SideNav/SideNav.jsx';
import Footer from '../../ui/components/Footer/Footer.jsx';
import Home from '../../ui/pages/Home.jsx';
import Register from '../../ui/pages/Login/Register.jsx';
import Login from '../../ui/pages/Login/Login.jsx';
import NotFound from '../../ui/pages/NotFound.jsx';

FlowRouter.route('/', {
    name: 'Home',
    action(params, queryParams) {
        mount(MainLayout, {
            main: <Home/>,
        });
    },
});

FlowRouter.route('/register', {
    name: 'Register',
    action(params, queryParams) {
        mount(MainLayout, {
            main: <Register/>,
        });
    },
});

FlowRouter.route('/login', {
    name: 'Login',
    action(params, queryParams) {
        mount(MainLayout, {
            main: <Login/>,
        });
    },
});

Meteor.startup(() => {
    /*ReactDOM.render(
        <MainLayout />,
        document.getElementById('app')
    );*/
});
