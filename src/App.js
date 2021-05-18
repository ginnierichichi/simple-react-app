import React, { useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
     if (window.innerWidth > 768 && isOpen) {
       setIsOpen(false);
       console.log('I resized');
     }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });

  return (
    <>
       <Navbar toggle={toggle}/>
       <Dropdown isOpen={isOpen} toggle={toggle} />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/about" exact component={ About} />
         <Route path="/menu" exact component={ Menu } />
       </Switch>
       <Footer />
   </>
   );
  
}

export default App;
