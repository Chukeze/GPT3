import './App.css';

import {Header, Footer, Blog, Features, Possiblity, WhatGPT3} from './containers';
import {CTA, Brand, Navbar} from './components';
import Hero from './containers/hero/Hero';

function App() {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar />
        <Hero />
      </header>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
