import React from 'react';
import Repo from "./Repo";

function RepoCategories({title}) {
    return (

        <div>
            <h2>{title}</h2>
            <hr />
            <Repo githubURL={"ReactJS"}/>
        </div>
    );
}

export default RepoCategories;