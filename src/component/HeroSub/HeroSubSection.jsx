import React from 'react'
import '@/style/HeroSub.css'
import AutoScrollCarousel from './Carousel'

const HeroSubSection = () => {
    const list_items =
        [
            { logo1: '', logo2: '', name: 'Logoipsum' },
            { logo1: '', logo2: '', name: 'Logoipsum' },
            { logo1: '', logo2: '', name: 'Logoipsum' },
            { logo1: '', logo2: '', name: 'Logoipsum' },
        ]
    return (
        <section className='border-bottom' style={{ padding: '3em 1em 3em 1em' }}>
            <div className='container '>
                <div className='row row-cols-1 row-cols-lg-2'>
                    <div className='col col-lg-5'>
                        <h2 className='headline' data-aos='fade-right'>
                            More than 25,000 world-class brands trust <span className='headline-highlight'> Influozy </span>
                        </h2>
                    </div>
                    {/* <div className='col'>
                        <ul className='list-unstyled d-flex gap-5'>
                            {list_items.map((item, idx) => (
                                <li key={idx}>
                                    <div>
                                        <div>
                                            {item.logo1}
                                        </div>
                                        <div>
                                            {item.logo2}
                                        </div>
                                        <div className=''>
                                            <p className='fw-bold fs-3 text-secondary'>{item.name}</p>
                                        </div>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div> */}
                    <div className='col d-flex flex-column justify-content-center'>
                        <AutoScrollCarousel />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSubSection