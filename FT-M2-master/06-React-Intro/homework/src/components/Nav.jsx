import React from 'react';
import SearchBar from './SearchBar';

export default function Nav({onSearch}) {
    return<>
        <div className='Header'>
        WeatherApp
        <SearchBar onSearch={onSearch} />
        </div>
        
    </>

    
}