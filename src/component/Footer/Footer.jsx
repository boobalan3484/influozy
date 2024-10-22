import React, { createElement } from 'react'
import '@/style/Footer.css'
import Description from '@/component/SectionComponent/Description'
import Heading from '@/component/SectionComponent/Heading'

import { MdMail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

    const quick_links = [
        {
            name: 'About Us',
            url: ''
        },
        {
            name: 'Leadership',
            url: ''
        },
        {
            name: 'Careers',
            url: ''
        },
        {
            name: 'Article & News',
            url: ''
        },
        {
            name: 'Legal Notice',
            url: ''
        }
    ]

    const contact_us = [
        {
            platform: 'address',
            icon: FaLocationDot,
            label: 'Jl Cempaka Wangi No 22 Jakarta - Indonesia',
            url: '/'
        },
        {
            platform: 'mail',
            icon: MdMail,
            label: 'support@yourmail.com',
            url: 'mailto:support@yourmail.com'
        },
        {
            platform: 'mobile',
            icon: FaMobileScreen,
            label: '+6221.2002.2012',
            url: 'https://wa.me/+622120022012'
        },
    ]

    const social = [
        {
            platform: 'LinkedIn',
            icon: FaLinkedinIn,
            link: 'https://www.linkedin.com/',
            color: '#0a66c2',
        },
        {
            platform: 'Instagram',
            icon: FaInstagram,
            link: 'https://www.instagram.com/',
            color: 'linear-gradient(45deg, #FF7A00, #FF0169, #D300C5)', // Using a gradient
        },
        {
            platform: 'X Corp.',
            icon: FaXTwitter,
            link: 'https://x.com/',
            color: '#000',
        },
        {
            platform: 'YouTube',
            icon: AiOutlineYoutube,
            link: 'https://www.youtube.com/',
            color: '#FF0000',
        },
        {
            platform: 'Facebook',
            icon: FaFacebookF,
            link: 'https://www.facebook.com/',
            color: '#0866ff',
        },
    ];

    return (
        <footer className='footer-background'>
            <div className='footer-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-3 gap-lg-0">
                    <div className="col-12 col-lg-3 pe-4">
                        <div className='d-flex flex-column gap-3'>
                            <div className='title+logo'>
                                <a href="" className='d-inline-block'>
                                    <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/03/Logo-Influozy-8.png" alt="" className='footer-brand-logo-img' />
                                </a>
                            </div>

                            <Description desc='Si nostra facilisi donec ad lacus lectus imperdiet nascetur neque. Letius nibh non sociosqu dictum sit.' className='footer-brand-description' style={{ textAlign: 'justify' }} />

                            <div className='row social-icons mt-2'>
                                <ul className='d-flex list-unstyled gap-2 social-list my-2 justify-content-start px-2'>
                                    {social.map((item, idx) => (
                                        <li key={idx} className="social-icon-item" style={{ '--social-color': item.color }}>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-icon-link"
                                                title={item.platform}
                                            >
                                                {createElement(item.icon)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9 px-0 px-lg-4">
                        <div>
                            <div className="row gap-4">
                                <div className="col-12">
                                    <div className='d-flex flex-column flex-md-row gap-3 border p-4 rounded-4'>
                                        <div className="col-12 col-md-6 d-flex align-items-center">
                                            <Heading head='Subscribe Newsletter' className='text-white' />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <form>
                                                <div className='input-group'>
                                                    <input
                                                        type="email"
                                                        id='email'
                                                        name='email'
                                                        placeholder='Enter your email'
                                                        maxLength={45}
                                                        autoComplete='off'
                                                    />
                                                    <button className='text-uppercase'><small> Sign up </small></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-lg-3">
                                            <Heading head='Quick links' className='fs-6 fw-bold text-white text-uppercase my-3' />
                                            <ul className='d-flex flex-column gap-2'>
                                                {quick_links.map((item, idx) => (
                                                    <li key={idx}>
                                                        <a href={item.url}>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-6 col-lg-3">
                                            <Heading head='Support' className='fs-6 fw-bold text-white text-uppercase my-3' />
                                            <ul className='d-flex flex-column gap-2'>
                                                {quick_links.map((item, idx) => (
                                                    <li key={idx}>
                                                        <a href={item.url}>
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <Heading head='Get in touch' className='fs-6 fw-bold text-white text-uppercase my-3' />
                                            <ul className='d-flex flex-column gap-2'>
                                                {contact_us.map((item, idx) => (
                                                    <li key={idx}>
                                                        <div className=''>
                                                            {createElement(item.icon, { className: 'text-info' })}
                                                            <a href={item.url} className='ps-3'>
                                                                {item.label}
                                                            </a>
                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer