import React, { useState, useEffect } from 'react';

// ({ destructing options object})
const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', () => {
            console.log('BODY CLICK!')
            setOpen(false);
        }, { capture: true });
    }, []);
    

    const renderedOptions = options.map((option) => {
        // If it's option selected it doesn't show on the list
        if(option.value === selected.value) {
            return null
        }

        return (
            <div 
             key={option.value} 
             className='item'
             onClick={() => {
                 onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        )
    })

    return(
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div 
                  onClick={() => {
                      console.log('Dropdown Clicked!')
                      setOpen(!open)
                    }} 
                  /** if open = true, show classes. else do not show and show empy string */
                  className={`ui selection dropdown ${ open ? 'visible active' : ''}`}
                  >
                    <i className='dropdown icon' ></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;