import React, { createElement } from 'react'
import Heading from '../SectionComponent/Heading';
import Description from '../SectionComponent/Description';
import '@/style/WhyUs.css'
import { GrAnnounce } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
import { FaIcons } from "react-icons/fa";
import TitleHead from '../SectionComponent/TitleHead';

const services_list = [
    {
        icon: GrAnnounce,
        heading: 'Promote Your Product & Brand',
        description: 'Auctor laoreet quisque aliquam per eleifend. Ac duis quis est nisl convallis himenaeos aptent.',
    },
    {
        icon: VscGraphLine,
        heading: 'Growing & Scale Up Businesses',
        description: 'In pharetra ultrices mus eros senectus non laoreet metus. Feugiat senectus consequat sit malesuada integer turpis.',
    },
    {
        icon: FaIcons,
        heading: 'Success Campaign on Social',
        description: 'Auctor laoreet quisque aliquam per eleifend. Ac duis quis est nisl convallis himenaeos aptent.',
    }
]

const WhyUs = () => {
    return (
        <section className='whyUs-background'>
            <div className='container'>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col d-flex flex-column justify-content-center gap-3 py-4 px-4">
                        <TitleHead title='Why Choose Us' dataAos='fade-down' dataAosDelay='100' />
                        <Heading className='fs-1 fw-bold' head='Optimize your social efforts for greater impact' dataAos='fade-right' dataAosDelay='250' />
                        <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dataAos='zoom-in' dataAosDelay='400' />
                        <div className='row'>
                            {services_list.map((item, idx) => (
                                <div className='col-12' key={idx}>
                                    <div className='d-flex gap-4 my-2' data-aos='fade-right' data-aos-delay={idx * 200}>
                                        {createElement(item.icon, { className: 'fs-1 text-info' })}
                                        <div className='d-flex flex-column '>
                                            <Heading head={item.heading} className='fs-4 fw-bold' />
                                            <Description desc={item.description} />
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col position-relative px-4">
                        <div className='whyUs-imgs-wrapper'>
                            <div className='whyUs-short-img-wrapper'>
                                <div className='whyUs-short-img-animation' data-aos='fade-up' data-aos-delay='500'>
                                    <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/happy-multiracial-friends-having-fun-taking-selfie-young-happy-people-together-using-smartphone-1536x1024.jpg" alt="" className='whyUs-short-img' loading='lazy' />
                                </div>
                            </div>
                            <div className='whyUs-long-img-wrapper'>
                                <div className='whyUs-long-img-animation' data-aos='fade-left' data-aos-delay='300'>
                                    <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/stylish-people-near-graffiti-wall-e1680670592349.jpg" alt="" className='whyUs-long-img' loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs