import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navigation />
            <Hero />
            <Footer />
        </div>
    );
};

export default HomePage ;