import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import Header from './common/Header';
import Footer from './common/Footer';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
	return (
		<>
			<Header />
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} exact />
					<Route path='/login' element={<LoginScreen />} exact />
				</Routes>
			</Router>
			<Footer />
		</>
	);
};

export default App;
