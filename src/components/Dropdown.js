import React, { useState, useEffect, useRef } from 'react';

// ({ destructing options object})
const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
         if (ref.current && ref.current.contains(event.target)) {
            return;
          }
     
          setOpen(false);
        };
     
        document.body.addEventListener('click', onBodyClick, { capture: true });
     
        return () => {
          document.body.removeEventListener('click', onBodyClick, { capture: true });
        };
      }, []);
    

    // Renders list of items
    const renderedOptions = options.map((option) => {
        // If it's option selected it doesn't show on the list
        if(option.value === selected.value) {
            return null
        }
        // rendering "item"
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
        );
    });

    return(
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div 
                  onClick={() => {
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