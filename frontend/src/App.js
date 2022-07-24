import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Chat from './Pages/Chat';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector((state) => state.user);
  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          {!user && (
            <>
              <Route path="/login" element={<Login />}/>
              <Route path="/signup" element={<Signup />}/>
            </>
          )}
          
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
