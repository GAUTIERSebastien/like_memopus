import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams } from 'react-router-dom';
import { create } from 'domain';
import loaderTerms from './loaders/terms';
import Terms from './components/Terms';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router =createBrowserRouter(
createRoutesFromElements(
  <>
  <Route path="/" element={<App />} />
  {/* <Route path="" element={<Home />} /> */}
  <Route path="terms" element={<Terms />} loader={loaderTerms} />
  </>
)
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
