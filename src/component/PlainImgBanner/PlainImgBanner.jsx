import React from 'react'
import '@/style/PlainImgBanner.css'
import Heading from '../SectionComponent/Heading';
import Description from '../SectionComponent/Description';
import LinkButton from '../SectionComponent/LinkButton';

const PlainImgBanner = () => {
    return (
        <section className='img-banner-bg'>
            <div className='container'>
                <div className='img-banner-wrapper position-relative'>
                    <div className='img-banner-overlay'></div>

                    <div className='img-banner-container '>
                        <div>
                            <div className='img-banner-content text-white gap-2'>
                                <Heading className='fs-1 fw-bold' head='Let influencers do the heavy lifting for your marketing campaign' dataAos='fade-up' dataAosDelay='100'/>
                                <Description desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dataAos='fade-up' dataAosDelay='300'/>
                                <LinkButton label='Discover More' dataAos='fade-up' dataAosDelay='500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlainImgBanner