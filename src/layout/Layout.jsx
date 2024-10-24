'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Header from '@/component/Header/Header';
import Hero from "@/component/Hero/Hero";
import HeroSubSection from "@/component/HeroSub/HeroSubSection";
import About from "@/component/AboutUs/About";
import OurService from '@/component/Services/OurService';
import VideoBanner from '@/component/VideoBanner/VideoBanner';
import Experience from '@/component/Experience/Experience';
import WhyUs from '@/component/WhyUs/WhyUs';
import Featured from '@/component/FeaturedBrands/Featured';
import PlainImgBanner from '@/component/PlainImgBanner/PlainImgBanner';
import LatestBlogs from '@/component/LatestBlogs/LatestBlogs';
import FrequentlyAsked from '@/component/FAQ/FrequentlyAsked';
import Footer from '@/component/Footer/Footer';

const Layout = () => {
    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 800,
        })
    }, [])

    return (
        <>
            <Header />
            <div>
                <Hero />
                <HeroSubSection />
                <About />
                <OurService />
                <VideoBanner />
                <Experience />
                <WhyUs />
                <Featured />
                <PlainImgBanner />
                <FrequentlyAsked />
                <LatestBlogs />
            </div>
            <Footer />
        </>
    )
}

export default Layout