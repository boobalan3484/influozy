import React from 'react'
import '@/style/VideoBanner.css'
import Heading from '@/component/SectionComponent/Heading'
import Description from '@/component/SectionComponent/Description'
import LinkButton from '@/component/SectionComponent/LinkButton'
import { RiPlayLargeFill } from "react-icons/ri";


const VideoBanner = () => {
    return (
        <section className='video-background'>
            <div className="video-banner-overlay"></div>
            <div className='container position-relative'>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col py-2 order-2 order-lg-1">
                        <div className='d-flex flex-column gap-3 text-white text-center text-lg-start' data-aos='fade-right' data-aos-delay='100'>
                            <Heading className='fs-1 fw-bold' head='Win the hearts and minds of your audience with influencers' />
                            <Description desc='Ex rhoncus tincidunt amet scelerisque nisi faucibus tortor integer erat inceptos commodo. Accumsan sem lorem faucibus leo felis dui. Tortor dui pede leo est arcu dictum eros natoque curae.' />
                            <LinkButton label='Discover more' margin='d-flex justify-content-center'/>
                        </div>
                    </div>
                    <div className="col order-1 order-lg-2 py-4 py-lg-2 my-4 my-lg-0">
                        <div className='d-flex h-100 w-100 justify-content-center align-items-center'>
                            <div data-aos='zoom-out' data-aos-delay='300'>
                                <a href="" className='a'>
                                    <RiPlayLargeFill className='fs-2' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default VideoBanner