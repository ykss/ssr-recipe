import './App.css';
import Menu from './components/Menu';
import RedPages from './pages/RedPages';
import BluePages from './pages/BluePages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Route path='/red' component={RedPages}/>
      <Route path='/blue' component={BluePages}/>
    </div>
  );
}

export default App;
