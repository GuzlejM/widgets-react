import React, { useState } from 'react';

// useState Hook
const Accordion = ({ items }) => {
    const[activeIndex, setActiveIndex] = useState(null);

    // ON Click function returning index of and element in the Array
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    // Mapping trough an array of Items "Database" Object from App.js .
    // item parameter is passed to markup(JSX)
    const renderedItems = items.map((item, index) => {
        // If index is equal to activeIndex then set 'active' class to an element ELSE '' (empty string)
        const active = index === activeIndex ? 'active' : '';

        return (
            // React fragment is just a "wrapper" instead of divs
        <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)} >
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    });

    return <div className='ui styled accordion'>
        {renderedItems}
        <h1>{activeIndex}</h1>
        </div>
};

export default Accordion;