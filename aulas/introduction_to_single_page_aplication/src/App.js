import { Router, Route } from 'react-router-dom';

import './App.css';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';

import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal';
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/">
          <PaginaPrincipal></PaginaPrincipal>
        </Route>
        <Route
          path="/disciplinas/:id"
          component={PaginaDetalheDisciplina}
        >
        </Route>
        <Route exact path="/matriculas">
          <PaginaListarMatriculas />
        </Route>
        <Route
          path="/matriculas/:id"
          component={PaginaDetalheMatricula}
        >
        </Route>
      </Router>

    </div>
  );
}

export default App;
