import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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
// // "Database" sending PROP to Dropdown
// const options = [
//     {
//         label: 'Slovensko',
//         value: 'red'
//     },
//     {
//         label: 'Cesko',
//         value: 'green'
//     },
//     {
//         label: 'Nemecko',
//         value: 'blue'
//     }
// ]

const options = [
    {
      label: 'The Color Red',
      value: 'red',
    },
    {
      label: 'The Color Green',
      value: 'green',
    },
    {
      label: 'A Shade of Blue',
      value: 'blue',
    },
  ];
  
  export default () => {
    return (
      <div>
        <Translate />
      </div>
    );
  };