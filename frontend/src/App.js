import './App.css';
import Navbar from './components/header.js' 
import Homepage from './pages/homepage.js'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Journal from './pages/journal.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Homepage />} />
          <Route
            path="/journal"
            element={<Journal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
