//rfc --> to create function
//rafce --->to create arrow function

import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default Home;
