import './App.css';

import {Hero, Footer, Blog, Features, Possibility, WhatGPT3} from './containers';
import {CTA, Brand, Navbar} from './components';

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
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
