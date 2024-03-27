import logo from './logo.svg';
import './App.css';
import LandingScreen from './screens/LandingScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppTemplate from './components/AppTemplate';
import AboutUs from './screens/AboutUs'
import Contact from './screens/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <LandingScreen/>
  );
}

export default App;