import React, { useContext, useEffect } from 'react'
import profileContext from '../context/profileContext'
import '../static/styles.css'


const CardProfile = () => {

    const profilesContext = useContext(profileContext);
    const { profileInfo } = profilesContext;

    const [avatar, setAvatar] = React.useState('')
    const [login, setLogin] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [description, setDescription] = React.useState(null)
    const [location, setLocation] = React.useState(null)

    useEffect(() => {
        if (profileInfo) {
            const avatar = profileInfo.data.avatar_url
            setAvatar(avatar)
            const login = profileInfo.data.login
            setLogin(login)
            const name = profileInfo.data.name
            setName(name)
            const description = profileInfo.data.bio
            setDescription(description)
            const location = profileInfo.data.location
            setLocation(location)

        }
    }, [profileInfo])


    return (
        <div className="mt-5">
            {
                profileInfo ?
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <img className="card-img-top" src={avatar} alt="profileavatar" />
                                <div className="card-body">
                                    <h4 className="card-title">{login}</h4>
                                    <p className="card-text">{name}</p>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">{location}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

export default CardProfile;