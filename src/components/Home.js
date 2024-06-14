import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <About />
      <Workout />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#workout">Workout</a></li>
      </ul>
    </nav>
  );
}

function About() {
  return (
    <section id="about">
      <h1>About Us</h1>
      <p>Welcome to our gym! We offer a variety of workout programs to help you achieve your fitness goals.</p>
      <p>What you can find:</p>
      <ul>
        <li>State-of-the-art equipment</li>
        <li>Professional trainers</li>
        <li>Personalized workout plans</li>
        <li>Group fitness classes</li>
      </ul>
    </section>
  );
}

function Workout() {
  return (
    <section id="workout">
      <h2>Full Body Workout</h2>
      <p>Our full body workout routine is designed to improve your strength and endurance.</p>
      <Link to="./Exercise.js">Go to Exercise</Link>
    </section>
  );
}

export default Home;
