import React from 'react';
import Header from './Components/Header';
import STop from './Components/STop/STop';
import SServises from './Components/SServises/SServises';
import SInfoContent from './Components/SInfoContent/SInfoContent';
import Footer from './Components/Footer';
import './img/icons/Dots_118x134.svg';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
  <>
    <Header />

    <main>

      <STop />

      <section className='SExercise'>
        <div>
          <h1>FitSelf &mdash; New Sports</h1>
          <img src="img/icons/Dots_118x134.svg" alt="dots" loading='lazy' />
        </div>
      </section>

      <SServises />

      <SInfoContent />

    </main>

    <Footer />
  </>
  )
}

export default App;
