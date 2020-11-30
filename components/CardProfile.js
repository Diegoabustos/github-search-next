import React, { useContext, useEffect } from 'react'
import profileContext from '../context/profileContext'
import '../static/styles.css'


const CardProfile = () => {

  const profilesContext = useContext(profileContext);
  const { profileInfo } = profilesContext;

  const [ avatar, setAvatar ] = React.useState('')
    const [ login, setLogin ] = React.useState(null)
    const [ name, setName ] = React.useState(null)
    const [ description, setDescription ] = React.useState(null)
    const [ location, setLocation ] =React.useState(null)

    useEffect(() => {
        if (profileInfo) {
            const avatar = profileInfo.data.avatar_url
            setAvatar(avatar)
            const login = profileInfo.data.login
            setLogin(login)
            const  name = profileInfo.data.name
            setName(name)
            const  description = profileInfo.data.bio
            setDescription(description)
            const  location = profileInfo.data.location
            setLocation(location)
  
        }
    }, [profileInfo])


    return (
        <div>
            {
                profileInfo ?
                <div className="row mt-4  justify-content-center">
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src={avatar} />
                                <h3 className="name">{login}</h3>
                                <p className="title">{name}</p>
                                <p className="description">{description}</p>
                                <p className="description">{location}</p>
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