import Layout from '../components/Layout';
import Form from '../components/Form';
import ReposList from '../components/ReposList';


const RepositoriesPage = () => {
    return (
        <div>
            <Layout>
                <Form />
                <div className="col-md-auto">
                    <ReposList />
                </div>
            </Layout>
        </div>
    )
}

export default RepositoriesPage;