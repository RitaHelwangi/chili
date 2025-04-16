import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomeSection from "./components/welcomesection";

const App = () => {
    return (
        <div>
            <Header />
            <WelcomeSection />
        </div>
    );
};

export default App;
