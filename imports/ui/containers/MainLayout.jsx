import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from '../components/Header/Header.jsx';
import SideNav from '../components/SideNav/SideNav.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default class MainLayout extends React.Component {
    /*
    render() {
        return (
            <div className="application">
                <Router>
                    <div>
                        <Header />
                        <SideNav />
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/register' component={Register}/>
                            <Route path='/Login' component={Login}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
    */
    render() {
        return (
            <div className="application">
                <Header />
                <SideNav />
                <div>
                    {this.props.main}
                </div>
                <Footer />
            </div>
        );
    }
}
