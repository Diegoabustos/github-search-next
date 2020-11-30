import Head from 'next/head'
import Layout from '../components/Layout'
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Layout>
        <div className="container text-center pt-5">
          <h1>GitHub Profiles Finder App</h1>
          <p className="lead">Welcome to the application that searches for profiles and repositories using the github api. Navigate to the search you want.</p>
          <Link href="/profilepage">
          <button type="button" className="btn btn-primary btn-lg">Profile Search</button>
          </Link>
          <Link href="/repositoriespage">
            <button type="button" className="btn btn-secondary btn-lg">Search for Repos</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
