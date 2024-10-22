import React from 'react'
import '@/style/Hero.css'
import LinkButton from '../SectionComponent/LinkButton'
import { IoMdHeart } from "react-icons/io";

import { HiUserGroup } from "react-icons/hi2";
const Hero = () => {
    return (
        <section className='hero-background '>
            <div className='hero-bg-overlay'></div>
            <div className="container position-relative z-1">
                <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center align-items-center ">

                    <div className="col px-4 d-flex flex-column gap-4">
                        <div>
                            <h2 className='hero-title' data-aos='fade-up' data-aos-delay="300">
                                Find The Right Influencer For Your Business
                            </h2>
                        </div>
                        <div className='hero-p' data-aos='fade-up' data-aos-delay="600">
                            <p>
                                Taciti dui mollis lobortis donec consectetur vel felis efficitur. Accumsan molestie habitasse libero ornare a turpis sed finibus fermentum.
                            </p>
                        </div>
                        <LinkButton label='Discover More' dataAos='zoom-in' dataAosDelay="900" />
                    </div>

                    <div className="col px-4 my-5">
                        <div>
                            <div className='row'>

                                <div className="col">
                                    <div className="row flex-column gap-4">
                                        <div className="col position-relative">
                                            <div data-aos='fade-right' data-aos-delay='200' className=''>
                                                <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/HI-2-e1680670683177.jpg" alt="img1" className='hero-img1' />
                                            </div>
                                            <div className='hero-img1-child' data-aos='fade-right' data-aos-delay='800' >
                                                <div className="hero-img1-child-img">
                                                    <div className="hero-img1-child-img-div"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col position-relative">
                                            <div data-aos='fade-up' data-aos-delay='600'>
                                                <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/HI-4-e1680670928686.jpg" alt="img1" className='hero-img2' />
                                            </div>
                                            <div className='hero-img2-child' data-aos='fade-right' data-aos-delay='900' >
                                                <div className="hero-img2-child-img">
                                                    <div className="hero-img2-child-img-div">
                                                        <div className='hero-img2-child-img-div1'>
                                                            <span className='hero-img2-child-img-span'>
                                                                <IoMdHeart />
                                                            </span>
                                                        </div>
                                                        <div className='hero-img2-child-img-div2'>
                                                            <div className='hero-img2-child-img-div2-child'>
                                                                <span>
                                                                    99.99%
                                                                </span>
                                                            </div>
                                                            <p className='hero-img2-child-img-div2-p m-0'>
                                                                Satisfied Users
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col ">
                                    <div className="row flex-column gap-4">
                                        <div className="col position-relative" style={{top:'-30px'}}>
                                            <div data-aos='fade-down' data-aos-delay='400'>
                                                <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/HI-1-e1680670908737.jpg" alt="img1" className='hero-img3' />
                                            </div>
                                            <div className='hero-img3-child' data-aos='fade-left' data-aos-delay='900' >
                                                <div className="hero-img3-child-img">
                                                    <div className="hero-img3-child-img-div">
                                                        <div className='hero-img3-child-img-div1'>
                                                            <span className='hero-img3-child-img-span'>
                                                                <HiUserGroup />
                                                            </span>
                                                        </div>
                                                        <div className='hero-img3-child-img-div2'>
                                                            <div className='hero-img3-child-img-div2-child'>
                                                                <span>
                                                                    4126+
                                                                </span>
                                                            </div>
                                                            <p className='hero-img3-child-img-div2-p m-0'>
                                                                Popular Influener
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col position-relative" style={{top:'-30px'}}>
                                            <div data-aos='fade-left' data-aos-delay='800'>
                                                <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/HI-3-e1680670881362.jpg" alt="img1" className='hero-img4' />
                                            </div>
                                            <div className='hero-img4-child' data-aos='fade-up' data-aos-delay='900' >
                                                <div className="hero-img4-child-img">
                                                    <div className="hero-img4-child-img-div1">
                                                        <div className="hero-img4-child-img-div2">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero