import React from 'react'

function RepoItem({ repo }) {
    const {html_url, name} = repo
    return (
        <div className='card'>
           <a href={html_url}><h3>{html_url } { name }</h3></a> 
        </div>
    )
}

export default RepoItem
