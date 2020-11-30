import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="container text-center pt-5">
          <h1>GitHub Profiles Finder App</h1>
          <p class="lead">Welcome to the application that searches for profiles and repositories using the github api. Navigate to the search you want.</p>
        </div>
      </Layout>
    </div>
  )
}
