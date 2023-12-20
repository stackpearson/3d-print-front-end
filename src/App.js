import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavComponent from './components/NavComponent';
import Portfolio from './pages/Portfolio';
import SubmitPage from './pages/SubmitPage';

function App() {
  return (<>
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/submit' element={<SubmitPage/>}/>
      </Routes>
    </div>
</>);
}

export default App;
