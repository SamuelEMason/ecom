import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';

import App from './App';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<HomePage />} />
			<Route path='/product/:id' element={<ProductPage />} />
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
