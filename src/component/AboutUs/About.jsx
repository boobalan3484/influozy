import React from 'react'
import '@/style/About.css'
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import SocialCount from './SocialCount';
import Heading from '../SectionComponent/Heading';
import Description from '../SectionComponent/Description';
import LinkButton from '../SectionComponent/LinkButton';
import TitleHead from '../SectionComponent/TitleHead';
import Counter from '../SectionComponent/Counter';

const About = () => {

    const list_items1 = [
        { name: 'Lorem ipsum dolor' },
        { name: 'sit amet consectetur adipisicing elit' },
        { name: 'Odio, possimus' },
        { name: ' Totam vel placeat animi corrupti' },
    ]
    const list_items2 = [
        { name: 'suscipit id hic eveniet ' },
        { name: 'Quis cupiditate officiis culpa' },
        { name: 'sapiente nihil ad recusandae' },
        { name: 'Repellat dolore commodi sequi ' },
    ]

    return (
        <section className='section-wrapper'>
            <div className='container'>
                <div className='d-flex flex-column gap-5'>
                    <div className='col'>
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col position-relative px-4">
                                <div data-aos='fade-right' data-aos-delay='300'>
                                    <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/influencers-vlogging-from-home-1536x1025.jpg" alt="" className='side-image' />
                                </div>
                                <div className='about-image-badge' data-aos='fade-down' data-aos-delay='400'>
                                    <div className='about-image-badge-sub'>
                                        <div className='counter'>
                                            <div className='counter-title'> Total Insight </div>
                                            <div className='counter-number-wrapper'>
                                                <span className='counter-number'>
                                                    <Counter count={27} />
                                                </span>
                                                <span className='counter-number-suffix'>
                                                    M+
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-between py-4 px-4 gap-3">
                                <TitleHead title='Who we are' dataAos='fade-down' dataAosDelay='300' />
                                <Heading className='fs-1 fw-bold' head='Get ahead of the game with influencer marketing' dataAos='fade-right' dataAosDelay='500' />
                                <Description desc='Aenean tortor maecenas facilisi adipiscing duis vitae ridiculus aptent. Magna tempus cursus vestibulum in proin sociosqu ullamcorper non. Tempus ridiculus vel per fusce imperdiet.' dataAos='zoom-in' dataAosDelay='700' />
                                <div className='row row-cols-1 row-cols-lg-2'>
                                    <div className='col pb-3' >
                                        <ul className='list-unstyled d-flex flex-column gap-3 h-100 m-0' data-aos='fade-left' data-aos-delay='800'>
                                            {list_items1.map((item, idx) => (
                                                <li key={idx}>
                                                    <div className='d-flex gap-2 align-items-center'>
                                                        <TbSquareRoundedCheckFilled className='text-primary fs-4' />
                                                        <span className='fs-6'>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='col pb-3'>
                                        <ul className='list-unstyled d-flex flex-column gap-3 h-100 m-0' data-aos='fade-left' data-aos-delay='900'>
                                            {list_items2.map((item, idx) => (
                                                <li key={idx}>
                                                    <div className='d-flex gap-2 align-items-center'>
                                                        <TbSquareRoundedCheckFilled className='text-primary fs-4' />
                                                        <span className='fs-6'>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <LinkButton label='More About Us' dataAos='zoom-in' dataAosDelay='1000' />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <SocialCount />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About