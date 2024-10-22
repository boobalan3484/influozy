import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css'; // Import CSS for Splide

const list_items =
    [
        { logo1: '', logo2: '', name: 'Logoipsum' },
        { logo1: '', logo2: '', name: 'Logoipsum' },
        { logo1: '', logo2: '', name: 'Logoipsum' },
        { logo1: '', logo2: '', name: 'Logoipsum' },
    ]

const AutoScrollCarousel = () => {
    const splideRef = useRef(null);

    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 3,
                pagination: false,
                arrows: false,
                autoScroll: {
                    speed: 0.5, // Adjust the scroll speed
                },
            });

            splide.mount({ AutoScroll }); // Mount with AutoScroll extension
        }
    }, []);

    return (
        <div className="splide my-3" ref={splideRef}>
            <div className="splide__track">
                <ul className="splide__list">
                    {list_items.map((item, idx) => (
                        <li className="splide__slide" key={idx}>
                            <p className='fw-bold fs-3 text-secondary m-0'>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AutoScrollCarousel;
