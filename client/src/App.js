import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<HomeScreen />} exact /> */}
        <Route path='/' element={<LoginScreen />} exact />
      </Routes>
    </Router>
  );
};

export default App;
