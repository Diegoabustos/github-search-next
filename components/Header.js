import React, { useContext } from 'react';
import Link from "next/link";
import profileContext from '../context/profileContext'



const Header = () => {

  const profilesContext = useContext(profileContext);
    const { enterProfile, profileInfoFn, repositoriesInfoFn, enterProfileFn } = profilesContext

    const clearProfile = () => {
      profileInfoFn('')
    }
    const clearRepos = () => {
      repositoriesInfoFn('')
    }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand" href="#">Home</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link href="/profilepage">
              <a  onClick={clearRepos} className="nav-link">Profile</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/repositoriespage">
              <a onClick={clearProfile} className="nav-link">Repositories</a>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Header;