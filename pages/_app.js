import ProfileState from '../context/profileState'
import '../static/styles.css'


const MyApp = ({ Component, pageProps }) => {
    return ( 
        <ProfileState>
            <Component {...pageProps} />
        </ProfileState>
    );
}

export default MyApp;