import React, { useContext, useState } from 'react'
import GithubContext from '../../Context/github/githubContext'

function Search({ setAlert }) {
    const context = useContext(GithubContext)
    const [search, setSearch] = useState('')

    const { userList } = context;

    console.log(`context.userlist()`, userList)

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
            {userList.length !== 0 ? <button className='btn btn-light btn-block' onClick={()=> context.clearUserList()}>Clear</button> : null}
        </div>
    )
}

export default Search
