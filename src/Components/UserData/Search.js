import React, { useContext, useState } from 'react'
import GithubContext from '../../Context/github/githubContext'

function Search({ handleClear, setAlert }) {
    const context = useContext(GithubContext)
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
        if (!search) {
            setAlert('Please enter something', 'danger', true);
        } else {
            context.searchUsers(search)
            setSearch('');
        }
    }

    return (
        <div>
            <form className='form'>
                <input type='text' name='search' onChange={e => setSearch(e.target.value)} value={search} placeholder='search' />
                <input type='submit' value='search' onClick={handleSearch} className='btn btn-dark btn-block' />
            </form>
            {context.userList ? <button className='btn btn-light btn-block' onClick={handleClear}>Clear</button> : null}
            

        </div>
    )
}

export default Search
