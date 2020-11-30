import React, { useContext, useState } from 'react'
import profileContext from '../context/profileContext'
import SearchField from '../components/SeacrhField'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';




const Form = () => {
    const profilesContext = useContext(profileContext);
    const { enterProfile, profileInfoFn, repositoriesInfoFn, enterProfileFn } = profilesContext

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
            console.log('without profile input')
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
        <ToastContainer />
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Search"/>
            </div>
        </div>
        </form>
     );
}
 
export default Form;