import React, { useContext } from 'react'
import profileContext from '../context/profileContext'


const Form = () => {
    const profilesContext = useContext(profileContext);
    const { enterProfileFn } = profilesContext

    const onChange = e => {
        enterProfileFn(e.target.value)
    }
    return ( 
        <>
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input 
                    onChange={onChange} 
                    className="form-control" 
                    type="text" 
                    placeholder="GitHub Username"
                />
            </div>
        </div>
        <div className="row mt-4  justify-content-center">
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Search"/>
            </div>
        </div>
        </>
     );
}
 
export default Form;