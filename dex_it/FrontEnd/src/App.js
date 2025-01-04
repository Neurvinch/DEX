
 import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';

import './App.css';
import Swap from './Components/Swap';

import Tokens from  "./Components/Tokens"

function App() {
  return (
    <div >
      <Header/>
      <div>
        <BrowserRouter>
     <Routes>
      <Route path ="/"  element ={<Swap/>}/>
      <Route  path ="/tokens" element = {<Tokens/>} />
     </Routes>
     </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
