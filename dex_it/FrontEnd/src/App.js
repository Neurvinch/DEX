
 import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import Swap from './Components/Swap';

import Tokens from  "./Components/Tokens"
import { useConnect, useAccount } from 'wagmi';
import {MetaMaskConnector} from 'wagmi/connectors/metaMask';

function App() {
       const {address , isConnected} = useAccount();
       const {connect} = useConnect({
        connector: new MetaMaskConnector(),
       });
           




  return (
    <div className="App">
    <Header connect={connect} isConnected={isConnected} address={address} />
    <div className="mainWindow">
      <Routes>
        <Route path="/" element={<Swap isConnected={isConnected} address={address} />} />
        <Route path="/tokens" element={<Tokens />} />
      </Routes>
    </div>

  </div>
  );
}

export default App;
