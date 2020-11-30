import React, { useContext, useState, useEffect } from 'react';
import profileContext from '../context/profileContext'
import CardRepositories from '../components/CardRepositories'

const ReposList = () => {
    const [ repositorieList, setRepositorie ] = useState([])
    const profilesContext = useContext(profileContext);
    const { repositoriesInfo } = profilesContext

    useEffect(() => {
        if (repositoriesInfo) {
            setRepositorie(repositoriesInfo.data)
        }
    }, [repositoriesInfo])

    return ( 
        <div className="row mt-5">
            {
                repositorieList.map(repositorie => (
                    <CardRepositories
                        key={repositorie.id}
                        repositorie={repositorie}
                    />
                ))
            }
        </div>
    );
}

export default ReposList;