import ProfileState from '../context/profileState'


const MyApp = ({ Component, pageProps }) => {
    return ( 
        <ProfileState>
            <Component {...pageProps} />
        </ProfileState>
    );
}

export default MyApp;