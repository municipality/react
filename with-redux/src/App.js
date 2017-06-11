import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={routes.homepage} component={Homepage}/>
      <Route exact path={routes.about} component={Homepage}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
