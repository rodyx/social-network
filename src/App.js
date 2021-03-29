import './App.scss';
import { Header } from './components/Header/Header';
import { history } from './history';
import { routes } from "./pages/routes";
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Router } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <main>
          <Switch>
            {routes.map(route => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
