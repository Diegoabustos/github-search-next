import Layout from '../components/Layout';
import Form from '../components/Form';
import CardProfile from '../components/CardProfile';

const ProfilePage = () => {
    return (
        <div>
            <Layout>
                <Form />
                <CardProfile />
            </Layout>
        </div>
    )
}

export default ProfilePage;