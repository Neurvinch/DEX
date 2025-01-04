import React from 'react'
import Logo from "../moralis-logo.svg";
import eth from "../eth.svg";
import  { BrowserRouter ,Link} from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
    <div className='leftSide'>
        <img src= {Logo} alt='Logo' className='logo'/>
        <BrowserRouter><Link to ="/" > <div className='headerItem'>Swap</div></Link> </BrowserRouter>
       
       <BrowserRouter> <Link to= "/tokens"><div className='headerItem'>Tokens</div></Link></BrowserRouter>
        
    </div>

    <div  className='rightSide'>
        < img src={eth} alt ="chain Logo"  className='eth'/>
        <div className='connectButton'>Connect</div>
    </div>
    
    </header>
  )
}
 
export default Header