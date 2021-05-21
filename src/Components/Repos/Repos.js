import React from 'react';
import RepoItem from './RepoItem';

function Repos({repo}) {
    return (
        repo?.map((repo, index) => {
            return (
                <RepoItem key={index} repo={repo}/>
            )
        })
    )
}

export default Repos
