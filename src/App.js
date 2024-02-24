import './App.css';
import 'aos/dist/aos.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App font-poppins'>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
