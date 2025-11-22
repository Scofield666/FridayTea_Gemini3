import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Catering } from './components/Catering';
import { Story } from './components/Story';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <Catering />
        <Story />
      </main>
      <Footer />
    </div>
  );
}

export default App;