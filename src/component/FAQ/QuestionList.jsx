import React from 'react'
import { Accordion, Placeholder } from 'rsuite';
import { FaAngleDown } from 'react-icons/fa';

const QuestionList = () => {

    const faq_list = [
        {
            id: 1,
            title: 'Where Can I Find Information?',
            description: 'Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.'
        },
        {
            id: 2,
            title: 'What Are Your Terms And Conditions?',
            description: 'Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.'
        },
        {
            id: 3,
            title: 'Can I Buy Directly From The Factory?',
            description: 'Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.'
        },
        {
            id: 4,
            title: 'What Kinds of Payment Do You Accept?',
            description: 'Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.'
        },
        {
            id: 5,
            title: 'When do I receive my order?',
            description: 'Velit sociosqu purus enim pharetra sed sem at iaculis. Felis ridiculus adipiscing dignissim eros pellentesque mus vitae litora. Felis nullam tortor phasellus viverra ut arcu. Euismod magnis ante convallis vulputate odio augue sit pretium dapibus.'
        }
    ]

    return (
        <div className='h-100'>
            <Accordion defaultActiveKey={1} >
                {faq_list.map((item, idx) => (
                    <Accordion.Panel key={idx} header={item.title} eventKey={item.id} caretAs={FaAngleDown}>
                        <p className='px-3 py-0'> {item.description} </p>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    )
}

export default QuestionList