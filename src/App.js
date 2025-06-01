import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Cart, SignIn, SignUp, StarterStore, PageOfProducts } from './pages';
import { Navbar } from './components';
import { Context } from './context';
import { useInitApp } from './hooks';
import './App.css';

function App() {
  const state = useInitApp();

  return (
    <Context.Provider value={state}>
      <div className="appContainer">
        <Navbar />
        <div className="mainContainer">
          <Switch>
            <Route
              path="/"
              exact>
              <StarterStore />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/signIn">
              <SignIn />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/:goodId?">
              <PageOfProducts />
            </Route>
            <Redirect to="/404" />
          </Switch>
          <ToastContainer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
