import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([])

    // Every single keypress doing new request
    // it's Long ass function until line 43
    useEffect(() => {
        // search is a function which creates request to wikipedia
        // we are using this function later on in Conditionals.
        const search = async () => {
           const { data } = await axios.get('https://sk.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        }

        if (term && !results.length) {
            search()
        } else {
            
        }
        // setTimeout function which sets time between
        // keypresses to 0.5s (built in JS method)
        // TODO: NEED TO FINISH FIXING useEfect lecture WARNING!
        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [term]);

    // You can see how syntax is changed where we insert rendering function straight
    // Into Mapping method as you could see from Accordion example before
    
    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'> 
                    <a 
                      className='ui button'
                      href={`https://sk.wikipedia.org?curid=${result.pageid}`}>Go </a>
                </div>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
        /* Searchbard */
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Hľadaj výraz</label>
                    <input 
                      value={term}
                      onChange={e => setTerm(e.target.value)}
                      className='input'/>
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;