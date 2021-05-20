import React, { useState } from 'react'

function Search({searchValue, handleClear, showBtn, setAlert}) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) {
            setAlert('Please enter something', 'danger', true);
        } else {
            searchValue(search);
            setSearch('');
        }

    }

    console.log(`showBtn`, showBtn)

    return (
        <div>
            <form className='form'>
                <input type='text' name='search' onChange={e => setSearch(e.target.value)} value={search} placeholder='search' />
                <input type='submit' value='search' onClick={handleSearch} className='btn btn-dark btn-block' />
            </form>
            {showBtn ? <button className='btn btn-light btn-block' onClick={handleClear}>Clear</button> : null}
            

        </div>
    )
}

export default Search
