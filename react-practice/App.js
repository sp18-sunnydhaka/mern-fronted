import React, { useEffect } from 'react'
import ReactDom from 'react-dom/client'


const heading = React.createElement('h1',{id:"heading"},"Nameste React");

const root = ReactDom.createRoot(document.getElementById('root'));

//jsx
// const jsxHeading = <h1>Nameste react jsx</h1>;
const JsxHeading =() => <h1>Nameste react jsx</h1>;

console.log(typeof <jsxHeading />);

// root.render(jsxHeading);

const Header = ()=>{
    return(
        <div className='header'>
            <div>
                < img className='logo' src="https://www.designmantic.com/logo-images/171406.png?company=Company%20Name&keyword=food&slogan=&verify=1" /> 
            </div>
            <div className='nav-items'> 
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const body = ()=> {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>

            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

useEffect(()=>{});

root.render(<AppLayout />);