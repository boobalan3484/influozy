import React, { createElement } from 'react'
import '@/style/ComponentStyle.css'
import '@/style/Services.css'
import Heading from '@/component/SectionComponent/Heading'
import Description from '@/component/SectionComponent/Description'
import LinkButton from '@/component/SectionComponent/LinkButton'

import { FaPuzzlePiece } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
import { FaTags } from "react-icons/fa";
import TitleHead from '../SectionComponent/TitleHead'


const OurService = () => {

    const services_list = [
        {
            icon: FaPuzzlePiece,
            heading: 'Content Ideas',
            description: 'In pharetra ultrices mus eros senectus non laoreet metus. Feugiat senectus consequat sit malesuada integer turpis.',
        },
        {
            icon: GrAnnounce,
            heading: 'Marketing Ads',
            description: 'In pharetra ultrices mus eros senectus non laoreet metus. Feugiat senectus consequat sit malesuada integer turpis.',
        },
        {
            icon: VscGraphLine,
            heading: 'Media Analytic',
            description: 'In pharetra ultrices mus eros senectus non laoreet metus. Feugiat senectus consequat sit malesuada integer turpis.',
        },
        {
            icon: FaTags,
            heading: 'Product Branding',
            description: 'In pharetra ultrices mus eros senectus non laoreet metus. Feugiat senectus consequat sit malesuada integer turpis.',
        }
    ]

    return (
        <section className='services-background section-wrapper'>
            <div className='services-bg-overlay'></div>
            <div className='container position-relative'>
                <div className="row gap-3 gap-lg-0">
                    <div className="col-12 col-lg-4 px-4">
                        <div className='d-flex flex-column gap-3'>
                            <TitleHead title='What We Offer' dataAos='fade-up' dataAosDelay='100'/>
                            <Heading className='fs-1 fw-bold' head='Our influencer marketing services' dataAos='fade-right' dataAosDelay='300'/>
                            <Description desc='Mattis etiam curae morbi lacus ex curabitur. Per maximus hendrerit nulla amet dictumst pretium parturient. Nullam nam consectetur erat netus a maecenas fusce bibendum.' dataAos='zoom-in' dataAosDelay='500'/>
                            <LinkButton label='All services' dataAos='zoom-in' dataAosDelay='700'/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 px-4">
                        <div className="row">
                            {services_list.map((item, idx) => (
                                <div className="col-12 col-md-6 p-2" key={idx}>
                                    <div className="widget-container" data-aos='fade-up' data-aos-delay={idx * 200}>
                                        <div className="services-wrapper ">
                                            <div className='d-flex flex-column gap-3'>
                                                {createElement(item.icon, { className: 'fs-1 text-info' })}
                                                <div className='d-flex flex-column gap-2'>
                                                    <Heading head={item.heading} className='fs-4' />
                                                    <Description desc={item.description} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurService