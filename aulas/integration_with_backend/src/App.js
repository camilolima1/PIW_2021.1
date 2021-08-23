import { Router, Route, Redirect } from 'react-router-dom';

import './App.css';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';

import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';


import history from "./history";
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});

  const setAuthLS = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }

  return (
    <AuthContext.Provider value={{auth: auth, setAuth: setAuthLS}}>
      <div className="App">
        <Router history={history}>
          <Route exact path="/">
            {auth.token == null ? <Redirect to="/login"></Redirect> : <PaginaPrincipal></PaginaPrincipal>}
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
          <Route
            path="/cadastro"
            component={PaginaCadastro}
          >
          </Route>
          <Route
            path="/login"
            component={PaginaLogin}
          >
          </Route>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
