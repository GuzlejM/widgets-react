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
        label: 'Slovensko',
        value: 'red'
    },
    {
        label: 'Cesko',
        value: 'green'
    },
    {
        label: 'Nemecko',
        value: 'blue'
    }
]

// Renderin template
export default () => {
    // Passing down as PROP selected, 
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <React.Fragment>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                selected={selected}
                /** Passing as a PROP onSelectedChange */
                onSelectedChange={setSelected}
                options={options}
                /> : null
            }

        </React.Fragment>
    );
};