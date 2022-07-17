import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Chat from './Pages/Chat';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
