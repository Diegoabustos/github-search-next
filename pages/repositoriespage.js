import Layout from '../components/Layout';
import Form from '../components/Form';
import CardRepositories from '../components/CardRepositories';


const RepositoriesPage = () => {
    return (
        <div>
            <Layout>
                <Form />
                <div className="col-md-auto">
                    <CardRepositories />
                </div>
            </Layout>
        </div>
    )
}

export default RepositoriesPage;