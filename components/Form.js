import React, { useContext, useState } from 'react'
import profileContext from '../context/profileContext'
import SearchField from '../components/SeacrhField'
import axios from 'axios';




const Form = () => {
    const profilesContext = useContext(profileContext);
    const { enterProfile, profileInfoFn, repositoriesInfoFn } = profilesContext

    const [ profile, setProfile ] = useState('')

    React.useEffect(() => {
        if (enterProfile) {
            setProfile(enterProfile)
        }
    }, [enterProfile])

    const onSubmit = async (e) => {
        e.preventDefault();

        // Validate
        if (profile) {
            const url = `https://api.github.com/users/${profile}`
            const urlRepos = `https://api.github.com/users/${profile}/repos`
            const response = await axios.get(url)
            const responseRepos = await axios.get(urlRepos)
            profileInfoFn(response)
            repositoriesInfoFn(responseRepos)
        } else {
            // task: Add validation. show an alert that indicates that the field is empty
            console.log('the field is empty')
        }
    }


    return ( 
        <form
            onSubmit={onSubmit}
        >
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <SearchField />
            </div>
        </div>
        
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Search"/>
            </div>
        </div>
        </form>
    );
}

export default Form;