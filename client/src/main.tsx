import { createRoot } from 'react-dom/client'
import {  RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { Provider } from 'react-redux';
import './index.css'
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);