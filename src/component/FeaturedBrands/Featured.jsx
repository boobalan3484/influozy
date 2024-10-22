import React from 'react'
import '@/style/Featured.css'

import Heading from '../SectionComponent/Heading'
import LinkButton from '../SectionComponent/LinkButton'
import TitleHead from '../SectionComponent/TitleHead'

const Featured = () => {

    const featured_list = [
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/fox-hub.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/zoo-tv.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/treva.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/velocity-9.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/muzica.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
        {
            logo: 'https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/ideaa.png',
            description: 'Efficitur nunc ipsum massa est facilisis sit vitae finibus. Lacus eros aptent pharetra dictumst primis malesuada praesent elementum id torquent lectus.',
            label: 'More Details',
            link: '/'
        },
    ]

    return (
        <section className='featured-background'>
            <div className='container'>
                <div className='row gap-4'>
                    <div className="col-12 text-center">
                        <TitleHead title='Featured Brand' dataAos='fade-up' dataAosDelay='100'/>
                        <Heading className='fs-1 fw-bold' head='Thank you for supporting our talents' dataAos='fade-up' dataAosDelay='250'/>
                    </div>
                    <div className="col-12">
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                            {featured_list.map((item, idx) => (
                                <div className="col p-2" key={idx}>
                                    <div className='featured-item-anime' data-aos='fade-up' data-aos-delay={idx * 200}>
                                        <div className='featured-item-wrapper gap-2'>

                                            <div style={{ width: '200px' }}>
                                                <img src={item.logo} alt='logo' className='featured-item-img' />
                                            </div>
                                            <div className='px-4'>
                                                {item.description}
                                            </div>
                                            <div>
                                                <LinkButton label={item.label} className='featured-item-btn'/>
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

export default Featured