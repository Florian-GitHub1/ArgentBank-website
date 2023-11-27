import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';

function Router() {
	const isConnected = useSelector((state) => state.auth.isConnected);

	return (
		<React.StrictMode>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route path='profile' element={isConnected ? <Profile /> : <Navigate to='/login' />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
