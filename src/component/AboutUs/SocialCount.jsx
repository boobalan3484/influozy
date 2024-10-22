import React, { createElement } from 'react'
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Counter from '../SectionComponent/Counter';

const SocialCount = () => {

    const social_list = [
        {
            icon: FaYoutube,
            count: '7',
            metric_prefix: 'M+',
            metric: 'Subscribers',
            border: 'social-border1'
        },
        {
            icon: FaInstagram,
            count: '2.4',
            metric_prefix: 'M+',
            metric: 'Followers',
            border: 'social-border2'
        },
        {
            icon: FaFacebook,
            count: '3',
            metric_prefix: 'M+',
            metric: 'Followers',
            border: 'social-border3'
        },
        {
            icon: FaXTwitter,
            count: '5.7',
            metric_prefix: 'M+',
            metric: 'Followers',
            border: ''
        },
    ]

    return (
        <div className='py-5'>
            <div className='container'>
                <div className="row row-cols-2 row-cols-md-4">
                    {social_list.map((item, idx) => (
                        <div className={`col d-flex align-items-center justify-content-center gap-4 p-3 ${item.border}`} key={idx}>
                            {createElement(item.icon, { className: 'social-icon-count-size' })}
                            <div className='counter'>
                                <div className='counter-title text-capitalize'> {item.metric} </div>
                                <div className='counter-number-wrapper'>
                                    <span className='counter-number'>
                                        <Counter count={item.count} />
                                    </span>
                                    <span className='counter-number-suffix'>
                                        {item.metric_prefix}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SocialCount