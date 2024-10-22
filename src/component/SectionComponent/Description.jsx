import React from 'react'

const Description = ({ desc, className, style, dataAos, dataAosDelay }) => {
    return (
        <div data-aos={dataAos} data-aos-delay={dataAosDelay}>
            <p className={` m-0 p-0 ${className}`} style={style}>
                {desc}
            </p>
        </div>
    )
}

export default Description