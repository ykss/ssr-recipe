import './App.css';
import Menu from './components/Menu';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';

const RedPage = loadable(() => import('./pages/RedPages'));
const BluePage = loadable(() => import('./pages/BluePages'));
const UserPage = loadable(()=> import('./pages/UsersPage'))

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UserPage} />
    </div>
  );
}

export default App;
