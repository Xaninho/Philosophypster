import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MenuBar from './components/dashboard/MenuBar';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>

        <AuthProvider>
          <Container>
            <MenuBar />
            <Route exact path="/dashboard" component={Dashboard} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
        </AuthProvider>
        
      </Switch>
    </Router>
  );
}

export default App;