import './App.css';
import 'aos/dist/aos.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
