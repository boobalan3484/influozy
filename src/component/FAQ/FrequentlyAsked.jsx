import React from 'react'
import '@/style/FrequentlyAsked.css'
import Heading from '../SectionComponent/Heading'
import Description from '../SectionComponent/Description'
import QuestionList from './QuestionList'

const FrequentlyAsked = () => {
    return (
        <section className='faq-background'>
            <div className='container'>
                <div className="row">
                    <div className=" col-12 col-lg-4">
                        <div className='faq-content d-flex flex-column justify-content-between gap-4'>
                            <Heading className='fs-1 fw-bold' head='Frequently Asked Questions' dataAos='fade-right' dataAosDelay='100'/>
                            <Description desc='Mauris aptent quis morbi aenean ante maecenas semper duis ultricies. Interdum penatibus leo natoque gravida risus dignissim ipsum arcu porttitor.' dataAos='zoom-in' dataAosDelay='300'/>
                            <div className='faq-content-img-wrapper'>
                                <div data-aos='fade-right' data-aos-delay='500'>
                                    <img src="https://web.moxcreative.com/influozy/wp-content/uploads/sites/26/2023/04/happy-african-american-influencer-in-braces-holding-palette-with-eye-shadow-near-digital-camera-1536x1025.jpg" alt="" className='faq-content-img'/>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-column"  data-aos='fade-up' data-aos-delay='500'>
                        <QuestionList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAsked