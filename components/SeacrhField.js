import React, { useContext } from 'react'
import profileContext from '../context/profileContext'



const SearchField = () => {

    const profilesContext = useContext(profileContext);
    const { enterProfileFn } = profilesContext

    const onChange = e => {
        enterProfileFn(e.target.value)
    }
    return (
        <input
            onChange={onChange}
            className="form-control"
            type="text"
            placeholder="GitHub Username"
        />
    );
}

export default SearchField;