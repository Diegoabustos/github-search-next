import React, { useContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import CardProfile from '../components/CardProfile';
import profileContext from '../context/profileContext'




const ProfilePage = () => {
    const profilesContext = useContext(profileContext);
    const { profileInfo } = profilesContext;
    const [profile, setProfile] = useState([])

    useEffect(() => {
        if (profileInfo) {
            setProfile(profileInfo)
        }
    }, [profileInfo])

    return (
        <Layout>
            <Form />
            {
                profile ? <CardProfile /> : null
            }
            
        </Layout>
    )
}

export default ProfilePage;