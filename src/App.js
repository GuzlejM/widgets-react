import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// "Database" items for Accordion which is sent as PROP
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript library'
    },
    {
        title: 'Second title',
        content: 'Lorem ipsum is a placeholder text'
    },
    {
        title: 'Third title',
        content: 'Lorem ipsum may be used as'
    }
]
// "Database" sending PROP to Dropdown
const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

// Renderin template
export default () => {
    // Passing down as PROP selected, 
    const [selected, setSelected] = useState(options[0]);
    return (
        <React.Fragment>
            <Dropdown 
            selected={selected}
            /** Passing as a PROP onSelectedChange */
            onSelectedChange={setSelected}
            options={options}/>
        </React.Fragment>
    );
};