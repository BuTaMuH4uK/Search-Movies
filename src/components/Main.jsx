import React from 'react';
import Navigation from '../containers/Navigation';
import Movies from '../containers/Movies';
import './Main.css';

const Main = () => {
  return (
    <section className="main">
      <Navigation />
      <Movies />
    </section>
  );
}

export default Main;