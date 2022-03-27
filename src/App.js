import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Navbar } from "./components/Navbar";
import { Products } from "./pages/Product";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <Router>
        <LastLocationProvider>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/cart' component={Cart} />
      </Switch>
      <Redirect to="/" />
    </LastLocationProvider>
      </Router>
  );
}

export default App;
