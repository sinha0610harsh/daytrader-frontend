import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login';
import Register from './components/Register';
import FAQ from './components/faq/faq';
import PrimitiveComponent from './components/primitives/primitives';
import configuration from './components/configuration/configuration'
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/Register" component={Register} exact/>
        <Route path="/faq" component={FAQ} exact/>
        <Route path="/primitives" component={PrimitiveComponent} exact/>
        <Route path="/configuration" component={configuration} exact/>
      </Switch>
    </Router>
  )
}

export default AppRouter