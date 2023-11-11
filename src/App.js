import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from './route-pages/welcome';
import { Clock } from './route-pages/clock';
import {Clockv2} from './route-pages/clock/clockv2';
import { VfmCalc } from './route-pages/vfmCalc';
import { Page1 } from './route-pages/page1';
import { CustomComponents } from './route-pages/custom_components';
import { Challenge1 } from './route-pages/challenge_1/Challenge_1';
import { Challenge2 } from './route-pages/challenge_2/Challenge_2';
import { Challenge3 } from './route-pages/challenge_3/Challenge_3';
import { Challenge4 } from './route-pages/challenge_4/Challenge_4';
import { Challenge5 } from './route-pages/challenge_5/Challenge_5';
import { Challenge6 } from './route-pages/challenge_6/Challenge_6';
import { Challenge7 } from './route-pages/challenge7/challenge7';
import { BlackJack } from './route-pages/blackJack';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', localStorage.getItem('theme'))
  }, [])
  return (
    <div className="App">
      <Router>
        {/* <AppHeader /> */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Challenge_1" element={<Challenge1 />} />
          <Route path="/Challenge_2" element={<Challenge2 />} />
          <Route path="/Challenge_3" element={<Challenge3 />} />
          <Route path="/Challenge_4" element={<Challenge4 />} />
          <Route path="/Challenge_5" element={<Challenge5 />} />
          <Route path="/Challenge_6" element={<Challenge6 />} />
          <Route path="/Challenge_7" element={<Challenge7 />} />
          <Route path='/Clock' element={<Clock />} />
          <Route path='/Clockv2' element={<Clockv2 />} />
          <Route path='/VfmCalc' element={<VfmCalc />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/CustomComponents' element={<CustomComponents />} />
          <Route path='/BlackJack' element={<BlackJack />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        {/* <AppFooter /> */}
      </Router>
    </div>
  );
}

export default App;
