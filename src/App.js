import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

export default () => {
    return (
        <div>
            
            <Search />
        </div>
    );
};