import Layout from '../components/Layout';
import Form from '../components/Form';
import ReposList from '../components/ReposList';


const RepositoriesPage = () => {
    return (
        <div>
            <Layout>
                <div className="container text-center pt-5">
                    <h4>Search for Repos</h4>
                </div>
                <Form />
                <div className="col-md-auto">
                    <ReposList />
                </div>
            </Layout>
        </div>
    )
}

export default RepositoriesPage;