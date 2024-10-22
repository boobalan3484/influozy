import React from 'react'
import '@/style/Experience.css'
import Heading from '../SectionComponent/Heading';
import Description from '../SectionComponent/Description';
import ProgressSection from './Progress';
import TitleHead from '../SectionComponent/TitleHead';

const Experience = () => {
    return (
        <section className='experience-background'>
            <div className="experience-bg-overlay"></div>
            <div className='container'>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col position-relative px-4 order-2 order-lg-1" data-aos='fade-right' data-aos-delay='100'>
                        <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/group-of-influencer-connecting-live-streaming-on-social-media-platforms-1536x1024.jpg" alt="" className='side-image' />
                    </div>
                    <div className="col d-flex flex-column justify-content-between gap-3 gap-lg-0 py-4 px-4 order-1 order-lg-2">
                        <TitleHead title='Our Experiences' dataAos='fade-down' dataAosDelay='300'/>
                        <Heading className='fs-1 fw-bold' head='Make your brand go viral with influencer marketing'  dataAos='fade-right' dataAosDelay='500'/>
                        <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dataAos='zoom-in' dataAosDelay='700' />
                        <ProgressSection dataAos='fade-right' dataAosDelay='500'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience