import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<div className='mx-auto max-w-7xl'>
		<React.StrictMode>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</React.StrictMode>
	</div>
);
