import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from './route-pages/welcome';
import { Challenge_1 } from './route-pages/challenge_1/Challenge_1';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Challenge_1" element={<Challenge_1 />} />
        </Routes>
        {/* <AppFooter /> */}
      </Router>
    </div>
  );
}

export default App;
