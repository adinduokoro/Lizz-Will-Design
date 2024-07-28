import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components';
import { About, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
