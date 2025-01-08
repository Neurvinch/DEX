import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureChains, mainnet, wagmiconfig, createClient} from 'wagmi';
import{ publicProvider} from 'wagmi/providers/public';


const {webSocketProvider, Provider} = configureChains([mainnet],[publicProvider()]);

const client = createClient({
  autoConnect : true,
  provider: webSocketProvider,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <wagmiconfig client ={client}>
      <BrowserRouter>
    
      <App />
    
    </BrowserRouter>
    </wagmiconfig>
    
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
