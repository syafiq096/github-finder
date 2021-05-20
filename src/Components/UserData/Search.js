import React, { useState } from 'react'

function Search({searchValue}) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        searchValue(search);
        console.log(`search`, search)
    }

    return (
        <div>
            <form className='form'>
                <input type='text' name='search' onChange={e => setSearch(e.target.value)} value={search} placeholder='search' />
                <input type='submit' value='search' onClick={handleSearch} className='btn btn-dark btn-block' />
            </form>
        </div>
    )
}

export default Search
