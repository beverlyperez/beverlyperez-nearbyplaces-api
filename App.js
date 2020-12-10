import React from 'react';
import Login from './components/Login';
import Homepage from './components/Homepage';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Place from './components/Place';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' render={props => <Homepage {...props} />}>

      </Route>
      <Route path='/login' >
        <Login />
      </Route>
      <Route path='/place' >
        <Place />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
