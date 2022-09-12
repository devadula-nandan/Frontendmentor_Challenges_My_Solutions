import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from './route-pages/welcome';
import { Clock } from './route-pages/clock';
import { Challenge_1 } from './route-pages/challenge_1/Challenge_1';
import { Challenge_2 } from './route-pages/challenge_2/Challenge_2';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Challenge_1" element={<Challenge_1 />} />
          <Route path="/Challenge_2" element={<Challenge_2 />} />
          <Route path='/Clock' element={<Clock />} />
        </Routes>
        {/* <AppFooter /> */}
      </Router>
    </div>
  );
}

export default App;
