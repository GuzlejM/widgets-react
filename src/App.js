import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
  
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
};
const showList = () => {
  if (window.location.pathname === '/list') {
    return <Search />;
  }
};
const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
};
const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />;
  }
};


  export default () => {
    return (
      <div>
        <Route path='/'>
          <Accordion items={items} />
        </Route>
        <Route path='/list'>
          <Search />
        </Route>
        <Route path='/dropdown'>
          <Dropdown />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
      </div>
    );
  };