import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { StateProvider } from './StateProvide';
import reducer, {initialState} from './reducer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
   </StateProvider> 
  </StrictMode>
  
);





