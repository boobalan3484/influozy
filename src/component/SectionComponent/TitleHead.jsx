import React from 'react'
import '@/style/ComponentStyle.css'

const TitleHead = ({ title, dataAos, dataAosDelay }) => {
    return (
        <div data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <h2 className='title-style'>{title}</h2>
        </div>
    )
}

export default TitleHead