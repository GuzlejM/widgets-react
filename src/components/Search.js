import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('Slovensko');
    const [results, setResults] = useState([])

    // Every single keypress doing new request
    useEffect(() => {
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
        };

            search();
        
    }, [term]);

    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Hľadaj akýkoľvek výraz</label>
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