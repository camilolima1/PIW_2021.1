import { Router, Route } from 'react-router-dom';

import { PaginaFeed } from './components/pages/PaginaFeed/PaginaFeed';
import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';

import './App.css';
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/">
          <PaginaFeed />
        </Route>
        <Route path="/postar">
            <PaginaPostar />
        </Route>
      </Router>
    </div>
  );
}

export default App;
