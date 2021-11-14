import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App container-fluid">
      {/* <h2>Homepage</h2> */}
      <AuthProvider>

        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route path="/explore">
              <Explore></Explore>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/purchase/:productId">
              <Purchase ></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard> 
            </PrivateRoute>


          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
